import { z } from "zod";
import { validationMessages } from "@/constants/validationMessage";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { toastError, toastSuccess } from "@/components/kit/toast";
import { ARTICLETYPEENUM } from "@/features/admin/article/types";
import useUpdatePost from "@/features/admin/post/hook/mutations/useUpdatePost";

const schema = z.object({
    persianTitle1: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),
    persianTitle2: z
        .string({ required_error: validationMessages.required }).optional(),
    englishTitle1: z
        .string({ required_error: validationMessages.required }).optional(),
    englishTitle2: z
        .string({ required_error: validationMessages.required }).optional(),
    englishTitle3: z
        .string({ required_error: validationMessages.required }).optional(),
    persianTitle3: z
        .string({ required_error: validationMessages.required }).optional(),
    persianDescription: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),
    englishDescription: z
        .string({ required_error: validationMessages.required }).optional(),
    imageFiles: z
        .array(z.instanceof(File))
        .nonempty({ message: validationMessages.required })
        .refine((files) => files.every((f) => f.size > 0), {
            message: validationMessages.required,
        }).optional(),

    videoFiles: z
        .array(z.instanceof(File))
        .nonempty({ message: validationMessages.required })
        .refine((files) => files.every((f) => f.size > 0), {
            message: validationMessages.required,
        }).optional(),
});
type FormSchemaType = z.infer<typeof schema>;
const useUpdatePostModal = ({ reloadTable, onClose, selectedRow, articleType }: { reloadTable: () => void, onClose: () => void, selectedRow: any, articleType: ARTICLETYPEENUM }) => {
    const { isSuccess: updateSuccess, error: updateError, mutate: updatePost, isPending: updatePending } = useUpdatePost()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            persianTitle1: selectedRow && selectedRow.persianTitle1,
            persianTitle2: selectedRow && selectedRow.persianTitle2,
            persianTitle3: selectedRow && selectedRow.persianTitle3,
            englishTitle1: selectedRow && selectedRow.englishTitle1,
            englishTitle2: selectedRow && selectedRow.englishTitle2,
            englishTitle3: selectedRow && selectedRow.englishTitle3,
            persianDescription: selectedRow && selectedRow.persianDescription,
            englishDescription: selectedRow && selectedRow.englishDescription,

        }
    });
    const onSubmit = (data: FormSchemaType) => {


        const params = {
            persianTitle1: data.persianTitle1,
            persianTitle2: data.persianTitle2,
            persianTitle3: data.persianTitle3,
            englishTitle1: data.englishTitle1,
            englishTitle2: data.englishTitle2,
            englishTitle3: data.englishTitle3,
            persianDescription: data.persianDescription,
            englishDescription: data.englishDescription,
            articleType: articleType
        }
        const formData = new FormData()
        formData.append("dto", new Blob([JSON.stringify(params)], { type: "application/json" }))
        if (data.imageFiles && data.imageFiles.length > 0) {
            data.imageFiles.forEach((file) => {
                formData.append("imageFiles", file);
            });
        }

        if (data.videoFiles && data.videoFiles.length > 0) {
            data.videoFiles.forEach((file) => {
                formData.append("videoFiles", file);
            });
        }
        updatePost({ data: formData, id: selectedRow?.id, })
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
export default useUpdatePostModal;





