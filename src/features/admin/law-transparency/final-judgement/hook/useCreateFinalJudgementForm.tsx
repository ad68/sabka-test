import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationMessages } from "@/constants/validationMessage";
import { toastSuccess } from "@/components/kit/toast";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { dateToGregorian } from "@/utils";
import useAddFinalJudgement
    from "@/features/admin/law-transparency/final-judgement/hook/mutations/useAddFinalJudgement";
export const schema = z.object({
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

export type FormSchemaType = z.infer<typeof schema>
const useCreateFinalJudgementForm = ({ reloadTable, onClose }: { reloadTable: () => void, onClose: () => void, }) => {
    const { isSuccess, mutate, isPending } = useAddFinalJudgement()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            province: "",
            title: "",
            jurisdictionBranch: "",
            forAgainst: "",
            date: undefined,
            description: ""
        }
    });
    const onSubmit = (data: any) => {
        console.log(data)
        const dto = {
            province: data.province,
            title: data.title,
            jurisdictionBranch: data.jurisdictionBranch,
            forAgainst: data.forAgainst,
            date: dateToGregorian(data.date),
            description: data.description,
        }
        mutate({ data: dto })
    }
    useEffect(() => {
        if (isSuccess) {
            toastSuccess("عملیات با موفقیت انجام شد")
            reloadTable();
            onClose()
        }
    }, [isSuccess])
    return {
        control,
        handleSubmit,
        errors,
        onSubmit,
        isPending
    }
}
export default useCreateFinalJudgementForm;