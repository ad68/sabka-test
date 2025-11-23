import { z } from "zod";
import { validationMessages } from "@/constants/validationMessage";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { toastError, toastSuccess } from "@/components/kit/toast";
import useUpdatePictureGallery
    from "@/features/admin/media/components/picture-gallery/hook/mutations/useUpdatePictureGallery";
import { DocumentTypeEnum, MediaTypeEnum } from "../../../types";

const schema = z.object({
    persianTitle: z
        .string({ required_error: validationMessages.required }),
    englishTitle: z
        .string({ required_error: validationMessages.required }).optional(),


    imageFiles: z
        .array(z.instanceof(File))
        .nonempty({ message: validationMessages.required })
        .refine((files) => files.every((f) => f.size > 0), {
            message: validationMessages.required,
        }).optional(),
});
type FormSchemaType = z.infer<typeof schema>;
const useUpdatePictureGalleryModal = ({ reloadTable, onClose, selectedRow }: { reloadTable: () => void, onClose: () => void, selectedRow: any }) => {
    const { isSuccess: updateSuccess, error: updateError, mutate: updatePictureGallery, isPending: updatePending } = useUpdatePictureGallery()

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
        /* const params = {
            persianTitle: data.persianTitle,
            englishTitle: data.englishTitle,

        } */
        const formData = new FormData()
        formData.append("persianTitle", data.persianTitle);
        const dto = {
            persianTitle: data.persianTitle,
            englishTitle: data.englishTitle,
            documentType: DocumentTypeEnum.PICTURE,
            mediaType: MediaTypeEnum.VIDEO_GALLERY,
        }
        formData.append("dto", new Blob([JSON.stringify(dto)], { type: "application/json" }))
        updatePictureGallery({ data: formData, id: selectedRow?.id, })
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
export default useUpdatePictureGalleryModal;





