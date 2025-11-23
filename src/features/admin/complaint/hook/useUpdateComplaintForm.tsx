import { z } from "zod";
import { validationMessages } from "@/constants/validationMessage";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { toastError, toastSuccess } from "@/components/kit/toast";
import useUpdateComplaint from "@/features/admin/complaint/hook/mutations/useUpdateComplaint";
import { dateToGregorian } from "@/utils";

const schema = z.object({
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
        .refine((file) => !file || file?.size > 0, { message: validationMessages.required })
        .optional()
});
type FormSchemaType = z.infer<typeof schema>;
const useUpdateComplaintModal = ({ reloadTable, onClose, selectedRow }: { reloadTable: () => void, onClose: () => void, selectedRow: any }) => {
    const { isSuccess: updateSuccess, error: updateError, mutate: updateComplaint, isPending: updatePending } = useUpdateComplaint()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            date: selectedRow && dateToGregorian(selectedRow.date),
            nationalCode: selectedRow && selectedRow.nationalCode,
            companyName: selectedRow && selectedRow.companyName,
            userName: selectedRow && selectedRow.userName,
            email: selectedRow && selectedRow.email,
            phoneNumber: selectedRow && selectedRow.phoneNumber,
            mobileNumber: selectedRow && selectedRow.mobileNumber,
            complaintType: selectedRow && selectedRow.complaintType,
            description: selectedRow && selectedRow.description,
        }
    });
    const onSubmit = (data: FormSchemaType) => {

        const date = dateToGregorian(data.date)

        const params = {
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
        const formData = new FormData()
        formData.append("dto", new Blob([JSON.stringify(params)], { type: "application/json" }))
        if (data.file) {
            formData.append("fileFiles", data.file)
        }
        updateComplaint({ data: formData, id: selectedRow?.id, })
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
export default useUpdateComplaintModal;





