import { z } from "zod";
import { validationMessages } from "@/constants/validationMessage";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { toastError, toastSuccess } from "@/components/kit/toast";
import useUpdatePicturePromotional
    from "@/features/admin/media/components/picture-promotional/hook/mutations/useUpdatePicturePromotional";
import { DocumentTypeEnum, MediaTypeEnum } from "../../../types";

const schema = z.object({
    persianTitle: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),
    englishTitle: z
        .string({ required_error: validationMessages.required }).optional(),
    coverPicture: z
        .custom<File>((val) => val instanceof File, {
            message: validationMessages.required,
        })
        .refine((file) => !file || file?.size > 0, { message: validationMessages.required }).optional(),
    // file: z
    //     .custom<File>((val) => val instanceof File, {
    //         message: validationMessages.required,
    //     })
    //     .refine((file) => !file || file?.size > 0, { message: validationMessages.required }),
});
type FormSchemaType = z.infer<typeof schema>;
const useUpdatePicturePromotionalModal = ({ reloadTable, onClose, selectedRow }: { reloadTable: () => void, onClose: () => void, selectedRow: any }) => {
    const { isSuccess: updateSuccess, error: updateError, mutate: updateImg, isPending: updatePending } = useUpdatePicturePromotional()

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

        const formData = new FormData();
        const dto = {
            persianTitle: data.persianTitle,
            englishTitle: data.englishTitle,
            documentType: DocumentTypeEnum.PICTURE,
            mediaType: MediaTypeEnum.PROMOTIONAL_MEDIA
        }
        formData.append("dto", new Blob([JSON.stringify(dto)], { type: "application/json" }))

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
export default useUpdatePicturePromotionalModal;





