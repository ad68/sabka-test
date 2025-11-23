import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationMessages } from "@/constants/validationMessage";
import { toastSuccess } from "@/components/kit/toast";
import { dateToGregorian, } from "@/utils";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useAddPublication from "@/features/admin/publication/hook/mutations/useAddPublication";
export const schema = z.object({
    persianTitle1: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),
    persianTitle2: z
        .string({ required_error: validationMessages.required }).optional(),
    englishTitle1: z
        .string({ required_error: validationMessages.required }).optional(),
    englishTitle2: z
        .string({ required_error: validationMessages.required }).optional(),

    persianPublicationName: z
        .string({ required_error: validationMessages.required }).optional(),
    englishPublicationName: z
        .string({ required_error: validationMessages.required }).optional(),
    quarterlyIssue: z
        .string({ required_error: validationMessages.required }).optional(),
    yearPublish: z
        .string({ required_error: validationMessages.required }).optional(),

    coverPicture: z
        .custom<File>((val) => val instanceof File, {
            message: validationMessages.required,
        })
        .refine((file) => !file || file?.size > 0, { message: validationMessages.required }),
    file: z
        .custom<File>((val) => val instanceof File, {
            message: validationMessages.required,
        })
        .refine((file) => !file || file?.size > 0, { message: validationMessages.required }),
});

export type FormSchemaType = z.infer<typeof schema>
const useCreatePublicationForm = ({ reloadTable, onClose, articleType }: {
    reloadTable: () => void, onClose: () => void,
    articleType: 'REGULATION' | 'NOTICE' | 'POST' | 'PUBLICATION'
}) => {
    const { isSuccess, mutate, isPending } = useAddPublication()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            persianTitle1: "",
            persianTitle2: "",
            englishTitle1: "",
            englishTitle2: "",
            persianPublicationName: "",
            englishPublicationName: "",
            quarterlyIssue: "",
            yearPublish: "",
        }
    });
    const onSubmit = (data: any) => {
        console.log(data)
        const datePublish = dateToGregorian(data.datePublish)
        const formData = new FormData();
        const dto = {
            datePublish,
            persianTitle1: data.persianTitle1,
            persianTitle2: data.persianTitle2,
            englishTitle1: data.englishTitle1,
            englishTitle2: data.englishTitle2,
            persianPublicationName: data.persianPublicationName,
            englishPublicationName: data.englishPublicationName,
            quarterlyIssue: data.quarterlyIssue,
            yearPublish: data.yearPublish,
            articleType: articleType
        }
        formData.append("dto", new Blob([JSON.stringify(dto)], { type: "application/json" }))
        formData.append("coverPicture", data.coverPicture)
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
export default useCreatePublicationForm;