import { z } from "zod";
import { validationMessages } from "@/constants/validationMessage";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { toastError, toastSuccess } from "@/components/kit/toast";
import useUpdateManager from "@/features/admin/law-transparency/managers-info/hook/mutations/useUpdateManager";

const schema = z.object({
    firstName: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),
    lastName: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),
    educational: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),

    jobExperience: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),
    methodOfEmployment: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),
    administrativeProcess: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),
    salary: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),
});
type FormSchemaType = z.infer<typeof schema>;
const useUpdateManagerModal = ({ reloadTable, onClose, selectedRow }: { reloadTable: () => void, onClose: () => void, selectedRow: any }) => {
    const { isSuccess: updateSuccess, error: updateError, mutate: updateManager, isPending: updatePending } = useUpdateManager()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: selectedRow && selectedRow.firstName,
            lastName: selectedRow && selectedRow.lastName,
            educational: selectedRow && selectedRow.educational,
            jobExperience: selectedRow && selectedRow.jobExperience,
            methodOfEmployment: selectedRow && selectedRow.methodOfEmployment,
            administrativeProcess: selectedRow && selectedRow.administrativeProcess,
            salary: selectedRow && selectedRow.salary,
        }
    });
    const onSubmit = (data: FormSchemaType) => {


        const params = {
            firstName: data.firstName,
            lastName: data.lastName,
            educational: data.educational,
            jobExperience: data.jobExperience,
            methodOfEmployment: data.methodOfEmployment,
            administrativeProcess: data.administrativeProcess,
            salary: data.salary,
        }
        updateManager({ data: params, id: selectedRow?.id })
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
export default useUpdateManagerModal;





