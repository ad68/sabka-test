import { z } from "zod";
import { validationMessages } from "@/constants/validationMessage";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { toastError, toastSuccess } from "@/components/kit/toast";
import { dateToGregorian } from "@/utils";
import useUpdateFinalJudgement
    from "@/features/admin/law-transparency/final-judgement/hook/mutations/useUpdateFinalJudgement";

const schema = z.object({
    province: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),
    title: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),
    jurisdictionBranch: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),
    forAgainst: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),
    date: z
        .date({ required_error: validationMessages.required }),
    description: z
        .string({ required_error: validationMessages.required }).optional(),
});
type FormSchemaType = z.infer<typeof schema>;
const useUpdateFinalJudgementModal = ({ reloadTable, onClose, selectedRow }: { reloadTable: () => void, onClose: () => void, selectedRow: any }) => {
    const { isSuccess: updateSuccess, error: updateError, mutate: updateFinalJudgement, isPending: updatePending } = useUpdateFinalJudgement()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            province: selectedRow && selectedRow.province,
            title: selectedRow && selectedRow.title,
            jurisdictionBranch: selectedRow && selectedRow.jurisdictionBranch,
            forAgainst: selectedRow && selectedRow.forAgainst,
            date: selectedRow && (new Date(selectedRow.date)),
            description: selectedRow && selectedRow.description || "",
        }
    });
    const onSubmit = (data: FormSchemaType) => {


        const params = {
            province: data.province,
            title: data.title,
            jurisdictionBranch: data.jurisdictionBranch,
            forAgainst: data.forAgainst,
            date: dateToGregorian(data.date),
            description: data.description,

        }
        updateFinalJudgement({ data: params, id: selectedRow?.id, })
    }

    useEffect(() => {
        if (updateSuccess) {
            toastSuccess("عملیات با موفقیت انجام شد")
            reloadTable();
            onClose()
        }
    }, [updateSuccess])

    useEffect(() => {
        if (updateError) {
            toastError("خطایی رخ داده است")
        }
    }, [])



    return {
        control,
        handleSubmit,
        errors,
        updatePending,
        onSubmit,

    }
}
export default useUpdateFinalJudgementModal;





