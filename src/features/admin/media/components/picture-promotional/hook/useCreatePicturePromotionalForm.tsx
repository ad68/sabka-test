import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationMessages } from "@/constants/validationMessage";
import { toastSuccess } from "@/components/kit/toast";

import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useAddPicturePromotional from "@/features/admin/media/components/picture-promotional/hook/mutations/useAddPicturePromotional";
import { DocumentTypeEnum, MediaTypeEnum } from "@/features/admin/media/types";
export const schema = z.object({
    persianTitle: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),
    englishTitle: z
        .string({ required_error: validationMessages.required }).optional(),
    coverPicture: z
        .custom<File>((val) => val instanceof File, {
            message: validationMessages.required,
        })
        .refine((file) => !file || file?.size > 0, { message: validationMessages.required }),
    // file: z
    //     .custom<File>((val) => val instanceof File, {
    //         message: validationMessages.required,
    //     })
    //     .refine((file) => !file || file?.size > 0, { message: validationMessages.required }),

});

export type FormSchemaType = z.infer<typeof schema>
const useCreatePicturePromotionalForm = ({ reloadTable, onClose }: { reloadTable: () => void, onClose: () => void }) => {
    const { isSuccess, mutate, isPending } = useAddPicturePromotional()

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
        const formData = new FormData();
        const dto = {
            persianTitle: data.persianTitle,
            englishTitle: data.englishTitle,
            documentType: DocumentTypeEnum.PICTURE,
            mediaType: MediaTypeEnum.PROMOTIONAL_MEDIA
        }
        formData.append("dto", new Blob([JSON.stringify(dto)], { type: "application/json" }))
        formData.append("imageFiles", data.coverPicture)
        // formData.append("fileFiles", data.file)
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
export default useCreatePicturePromotionalForm;