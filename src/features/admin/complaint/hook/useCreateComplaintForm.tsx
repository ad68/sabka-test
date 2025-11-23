import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationMessages } from "@/constants/validationMessage";
import { toastSuccess } from "@/components/kit/toast";
import { dateToGregorian, } from "@/utils";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useAddComplaint from "@/features/admin/complaint/hook/mutations/useAddComplaint";
export const schema = z.object({
    date: z
        .date({ required_error: validationMessages.required }),
    nationalCode: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),
    companyName: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),
    userName: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),
    email: z
        .string()
        .min(1, { message: "ایمیل الزامی است" })
        .email({ message: "ایمیل معتبر نیست" }).nonempty(validationMessages.required),
    phoneNumber: z
        .string()
        .min(1, { message: "شماره تلفن الزامی است" })
        .max(11, { message: "شماره تلفن  11 رقم است" })
        .regex(/^0[0-9]{2,}[0-9]{7,}$/, { message: "شماره تلفن معتبر نیست (باید 11 رقم باشد)" }).nonempty(validationMessages.required),
    mobileNumber: z
        .string()
        .min(1, { message: "شماره موبایل الزامی است" })
        .max(11, { message: "شماره موبایل  11 رقم است" })
        .regex(/^09\d{9}$/, { message: "شماره موبایل معتبر نیست (باید با 09 و 11 رقم باشد)" }).nonempty(validationMessages.required),
    complaintType: z
        .string({ required_error: validationMessages.required }),
    description: z
        .string({ required_error: validationMessages.required }),
    file: z
        .custom<File>((val) => val instanceof File, {
            message: validationMessages.required,
        })
        .refine((file) => !file || file?.size > 0, { message: validationMessages.required }),
});

export type FormSchemaType = z.infer<typeof schema>
const useCreateComplaintForm = ({ reloadTable, onClose, }: {
    reloadTable: () => void, onClose: () => void,
}) => {
    const { isSuccess, mutate, isPending } = useAddComplaint()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            nationalCode: "",
            companyName: "",
            userName: "",
            email: "",
            phoneNumber: "",
            mobileNumber: "",
            complaintType: "",
            description: "",

        }
    });
    const onSubmit = (data: any) => {
        console.log(data)
        const date = dateToGregorian(data.date)
        const formData = new FormData();
        const dto = {
            date,
            nationalCode: data.nationalCode,
            companyName: data.companyName,
            userName: data.userName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            mobileNumber: data.mobileNumber,
            complaintType: data.complaintType,
            description: data.description,
        }
        formData.append("dto", new Blob([JSON.stringify(dto)], { type: "application/json" }))
        formData.append("fileFiles", data.file)
        mutate({ data: formData })
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
export default useCreateComplaintForm;