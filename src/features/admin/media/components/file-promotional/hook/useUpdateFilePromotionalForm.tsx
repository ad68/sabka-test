import { z } from "zod";
import { validationMessages } from "@/constants/validationMessage";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { toastError, toastSuccess } from "@/components/kit/toast";
import useUpdateFilePromotional
    from "@/features/admin/media/components/file-promotional/hook/mutations/useUpdateFilePromotional";
import { dateToGregorian } from "@/utils";
import { DocumentTypeEnum, MediaTypeEnum } from "../../../types";

const schema = z.object({
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
    fileFiles: z
        .array(z.instanceof(File))
        .nonempty({ message: validationMessages.required })
        .refine((files) => files.every((f) => f.size > 0), {
            message: validationMessages.required,
        }).optional(),
});
type FormSchemaType = z.infer<typeof schema>;
const useUpdateFilePromotionalModal = ({ reloadTable, onClose, selectedRow }: { reloadTable: () => void, onClose: () => void, selectedRow: any }) => {
    const { isSuccess: updateSuccess, error: updateError, mutate: updateImg, isPending: updatePending } = useUpdateFilePromotional()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            persianTitle: selectedRow && selectedRow.persianTitle,
            englishTitle: selectedRow && selectedRow.englishTitle,
            persianPublicationName: selectedRow && selectedRow.persianPublicationName,
            englishPublicationName: selectedRow && selectedRow.englishPublicationName,
            quarterlyIssue: selectedRow && selectedRow.quarterlyIssue,
            yearPublish: selectedRow && selectedRow.yearPublish,
            datePublish: selectedRow && selectedRow.datePublish,

        }
    });
    const onSubmit = (data: any) => {

        const datePublish = dateToGregorian(data.datePublish)
        const formData = new FormData()
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
        updateImg({ data: formData, id: selectedRow?.id, })
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
export default useUpdateFilePromotionalModal;





