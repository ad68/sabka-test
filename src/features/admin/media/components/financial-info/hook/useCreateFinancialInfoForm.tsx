import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationMessages } from "@/constants/validationMessage";
import { toastSuccess } from "@/components/kit/toast";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useAddFinancialInfo from "@/features/admin/media/components/financial-info/hook/mutations/useAddFinancialInfo";
import { MediaTypeEnum } from "@/features/admin/media/types";
export const schema = z.object({
    persianTitle: z
        .string({ required_error: validationMessages.required }),
    englishTitle: z
        .string({ required_error: validationMessages.required }).optional(),

    /*  coverPicture: z
         .custom<File>((val) => val instanceof File, {
             message: validationMessages.required,
         })
         .refine((file) => !file || file?.size > 0, { message: validationMessages.required }), */
    fileFiles: z
        .array(z.instanceof(File))
        .nonempty({ message: validationMessages.required })
        .refine((files) => files.every((f) => f.size > 0), {
            message: validationMessages.required,
        }),
});

export type FormSchemaType = z.infer<typeof schema>
const useCreateFinancialInfoForm = ({ reloadTable, onClose }: { reloadTable: () => void, onClose: () => void, }) => {
    const { isSuccess, mutate, isPending } = useAddFinancialInfo()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            persianTitle: "",
            englishTitle: "",
        }
    });
    const onSubmit = (data: any) => {
        console.log(data)
        const formData = new FormData();
        const dto = {
            persianTitle: data.persianTitle,
            englishTitle: data.englishTitle,

            mediaType: MediaTypeEnum.FINANCIAL_INFORMATION,
        }
        formData.append("dto", new Blob([JSON.stringify(dto)], { type: "application/json" }))
        if (data.fileFiles && data.fileFiles.length > 0) {
            data.fileFiles.forEach((file: any) => {
                formData.append("fileFiles", file);
            });
        }
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
export default useCreateFinancialInfoForm;