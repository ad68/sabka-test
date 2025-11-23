import { z } from "zod";
import { validationMessages } from "@/constants/validationMessage";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { toastError, toastSuccess } from "@/components/kit/toast";
import useUpdateFilmGallery from "@/features/admin/media/components/film-gallery/hook/mutations/useUpdateFilmGallery";
import { DocumentTypeEnum, MediaTypeEnum } from "../../../types";

const schema = z.object({
    persianTitle: z
        .string({ required_error: validationMessages.required }),
    englishTitle: z
        .string({ required_error: validationMessages.required }).optional(),
    file: z
        .custom<File>((val) => val instanceof File, {
            message: validationMessages.required,
        })
        .refine((file) => !file || file?.size > 0, { message: validationMessages.required }),
});
type FormSchemaType = z.infer<typeof schema>;
const useUpdateFilmGalleryModal = ({ reloadTable, onClose, selectedRow }: { reloadTable: () => void, onClose: () => void, selectedRow: any }) => {
    const { isSuccess: updateSuccess, error: updateError, mutate: updateFilmGallery, isPending: updatePending } = useUpdateFilmGallery()

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


        /*  const params = {
             persianTitle: data.persianTitle,
             englishTitle: data.englishTitle,
             documentType: DocumentTypeEnum.FILM,
             mediaType: MediaTypeEnum.VIDEO_GALLERY,
         } */
        const formData = new FormData()
        const dto = {
            persianTitle: data.persianTitle,
            englishTitle: data.englishTitle,
            documentType: DocumentTypeEnum.FILM,
            mediaType: MediaTypeEnum.VIDEO_GALLERY,
        }
        formData.append("dto", new Blob([JSON.stringify(dto)], { type: "application/json" }))
        /*  formData.append("coverPicture", data.coverPicture) */
        if (data.file) {
            formData.append("videoFiles", data.file);
        }
        updateFilmGallery({ data: formData, id: selectedRow?.id, })
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
export default useUpdateFilmGalleryModal;





