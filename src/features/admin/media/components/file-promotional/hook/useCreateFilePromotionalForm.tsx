import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationMessages } from "@/constants/validationMessage";
import { toastSuccess } from "@/components/kit/toast";
import { dateToGregorian, } from "@/utils";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { DocumentTypeEnum, MediaTypeEnum } from "@/features/admin/media/types";
import useAddFilePromotional
    from "@/features/admin/media/components/file-promotional/hook/mutations/useAddFilePromotional";
export const schema = z.object({
    persianTitle: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),
    englishTitle: z
        .string({ required_error: validationMessages.required }).optional(),
    persianPublicationName: z
        .string({ required_error: validationMessages.required }).optional(),
    englishPublicationName: z
        .string({ required_error: validationMessages.required }).optional(),
    quarterlyIssue: z
        .string({ required_error: validationMessages.required }).optional(),
    yearPublish: z
        .string({ required_error: validationMessages.required }).optional(),
    datePublish: z
        .date({ required_error: validationMessages.required }).optional(),

    coverPicture: z
        .custom<File>((val) => val instanceof File, {
            message: validationMessages.required,
        })
        .refine((file) => !file || file?.size > 0, { message: validationMessages.required }),
    fileFiles: z
        .array(z.instanceof(File))
        .nonempty({ message: validationMessages.required })
        .refine((files) => files.every((f) => f.size > 0), {
            message: validationMessages.required,
        }),
});

export type FormSchemaType = z.infer<typeof schema>
const useCreateFilePromotionalForm = ({ reloadTable, onClose }: { reloadTable: () => void, onClose: () => void }) => {
    const { isSuccess, mutate, isPending } = useAddFilePromotional()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            persianTitle: "",
            englishTitle: "",
            persianPublicationName: "",
            englishPublicationName: "",
            quarterlyIssue: "",
            yearPublish: "",
            datePublish: undefined,


        }
    });
    const onSubmit = (data: any) => {
        console.log(data)
        const datePublish = dateToGregorian(data.datePublish)
        const formData = new FormData();
        const dto = {
            datePublish,
            persianTitle: data.persianTitle,
            englishTitle: data.englishTitle,
            persianPublicationName: data.persianPublicationName,
            englishPublicationName: data.englishPublicationName,
            quarterlyIssue: data.quarterlyIssue,
            yearPublish: data.yearPublish,
            documentType: DocumentTypeEnum.FILE,
            mediaType: MediaTypeEnum.PROMOTIONAL_MEDIA
        }
        formData.append("dto", new Blob([JSON.stringify(dto)], { type: "application/json" }))
        formData.append("coverPicture", data.coverPicture)
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
export default useCreateFilePromotionalForm;