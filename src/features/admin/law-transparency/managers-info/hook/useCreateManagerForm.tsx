import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationMessages } from "@/constants/validationMessage";
import { toastSuccess } from "@/components/kit/toast";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useAddManager from "@/features/admin/law-transparency/managers-info/hook/mutations/useAddManager";
export const schema = z.object({
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

export type FormSchemaType = z.infer<typeof schema>
const useCreateManagerForm = ({ reloadTable, onClose }: { reloadTable: () => void, onClose: () => void, }) => {
    const { isSuccess, mutate, isPending } = useAddManager()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: "",
            lastName: "",
            educational: "",
            jobExperience: "",
            methodOfEmployment: "",
            administrativeProcess: "",
            salary: "",
        }
    });
    const onSubmit = (data: any) => {
        console.log(data)
        const dto = {
            firstName: data.firstName,
            lastName: data.lastName,
            educational: data.educational,
            jobExperience: data.jobExperience,
            methodOfEmployment: data.methodOfEmployment,
            administrativeProcess: data.administrativeProcess,
            salary: data.salary,
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
export default useCreateManagerForm;