import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { validationMessages } from "@/constants/validationMessage";
import { toastSuccess } from "@/components/kit/toast";
export const schema = z.object({
    mobileNumber: z
        .string()
        .min(1, { message: "شماره موبایل الزامی است" })
        .regex(/^09\d{9}$/, { message: "شماره موبایل معتبر نیست (باید با 09 و 11 رقم باشد)" }),
    email: z
        .string()
        .min(1, { message: "ایمیل الزامی است" })
        .email({ message: "ایمیل معتبر نیست" }),
    firstName: z
        .string({ required_error: validationMessages.required })
        .min(1, { message: "نام الزامی است" })
        .min(2, { message: "نام باید حداقل ۲ کاراکتر باشد" }),
    lastName: z
        .string()
        .min(1, { message: "نام خانوادگی الزامی است" })
        .min(2, { message: "نام خانوادگی باید حداقل ۲ کاراکتر باشد" }),
    description: z
        .string()
        .min(1, { message: "توضیحات الزامی است" })
        .min(10, { message: "توضیحات باید حداقل ۱۰ کاراکتر باشد" }),
});

export type FormSchemaType = z.infer<typeof schema>
const useContactUsForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            mobileNumber: "",
            description: ""

        }
    });
    const onSubmit = (data: any) => {
        console.log(data)

        toastSuccess("با موفقیت ثبت شد")
    }
    return {
        control,
        handleSubmit,
        errors,
        onSubmit
    }
}
export default useContactUsForm