import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationMessages } from "@/constants/validationMessage";
import { toastSuccess } from "@/components/kit/toast";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useAddFilmGallery from "@/features/admin/media/components/film-gallery/hook/mutations/useAddFilmGallery";
import { DocumentTypeEnum, MediaTypeEnum } from "@/features/admin/media/types";
export const schema = z.object({
    persianTitle: z
        .string({ required_error: validationMessages.required }),
    englishTitle: z
        .string({ required_error: validationMessages.required }).optional(),

    /*   coverPicture: z
          .custom<File>((val) => val instanceof File, {
              message: validationMessages.required,
          })
          .refine((file) => !file || file?.size > 0, { message: validationMessages.required }), */
    file: z
        .custom<File>((val) => val instanceof File, {
            message: validationMessages.required,
        })
        .refine((file) => !file || file?.size > 0, { message: validationMessages.required }),
});

export type FormSchemaType = z.infer<typeof schema>
const useCreateFilmGalleryForm = ({ reloadTable, onClose }: { reloadTable: () => void, onClose: () => void, }) => {
    const { isSuccess, mutate, isPending } = useAddFilmGallery()

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
            documentType: DocumentTypeEnum.FILM,
            mediaType: MediaTypeEnum.VIDEO_GALLERY,
        }
        formData.append("dto", new Blob([JSON.stringify(dto)], { type: "application/json" }))
        /*  formData.append("coverPicture", data.coverPicture) */
        if (data.file) {
            formData.append("videoFiles", data.file);
        }
        console.log(formData)
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
export default useCreateFilmGalleryForm;