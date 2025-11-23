import { z } from "zod";
import { validationMessages } from "@/constants/validationMessage";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { toastError, toastSuccess } from "@/components/kit/toast";
import { DocumentTypeEnum, MediaTypeEnum } from "@/features/admin/media/types";
import useUpdateFileGallery from "@/features/admin/media/components/file-gallery/hook/mutations/useUpdateFileGallery";

const schema = z.object({
    persianTitle: z
        .string({ required_error: validationMessages.required }),
    englishTitle: z
        .string({ required_error: validationMessages.required }).optional(),

    // coverPicture: z
    //     .custom<File>((val) => val instanceof File, {
    //         message: validationMessages.required,
    //     }).optional()
    //     .refine((file) => !file || file?.size > 0, { message: validationMessages.required }),
    //
    fileFiles: z
        .array(z.instanceof(File))
        .nonempty({ message: validationMessages.required })
        .refine((files) => files.every((f) => f.size > 0), {
            message: validationMessages.required,
        }).optional(),
});
type FormSchemaType = z.infer<typeof schema>;
const useUpdateFileGalleryModal = ({ reloadTable, onClose, selectedRow }: { reloadTable: () => void, onClose: () => void, selectedRow: any }) => {
    const { isSuccess: updateSuccess, error: updateError, mutate: updateFileGallery, isPending: updatePending } = useUpdateFileGallery()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            persianTitle: selectedRow && selectedRow.persianTitle,
            englishTitle: selectedRow && selectedRow.englishTitle,
        }
    });
    const onSubmit = (data: FormSchemaType) => {


        const params = {
            persianTitle: data.persianTitle,
            englishTitle: data.englishTitle,
            documentType: DocumentTypeEnum.FILE,
            mediaType: MediaTypeEnum.VIDEO_GALLERY,
        }
        const formData = new FormData()
        formData.append("dto", new Blob([JSON.stringify(params)], { type: "application/json" }))
        if (data.fileFiles && data.fileFiles.length > 0) {
            data.fileFiles.forEach((file: any) => {
                formData.append("fileFiles", file);
            });
        }
        updateFileGallery({ data: formData, id: selectedRow?.id, })
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
export default useUpdateFileGalleryModal;





