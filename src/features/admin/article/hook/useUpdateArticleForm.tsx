import { z } from "zod";
import { validationMessages } from "@/constants/validationMessage";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { toastError, toastSuccess } from "@/components/kit/toast";
import useUpdateArticle from "@/features/admin/article/hook/mutations/useUpdateArticle";
import { ARTICLETYPEENUM } from "@/features/admin/article/types";

const schema = z.object({
    persianTitle1: z
        .string({ required_error: validationMessages.required }),
    englishTitle1: z
        .string({ required_error: validationMessages.required }),
    persianTitle2: z
        .string({ required_error: validationMessages.required }),
    englishTitle2: z
        .string({ required_error: validationMessages.required }),

    file: z
        .custom<File>((val) => val instanceof File, {
            message: validationMessages.required,
        })
        .refine((file) => !file || file?.size > 0, { message: validationMessages.required })
        .optional()
});
type FormSchemaType = z.infer<typeof schema>;
const useUpdateArticleModal = ({ reloadTable, onClose, selectedRow, articleType }: { reloadTable: () => void, onClose: () => void, selectedRow: any, articleType: ARTICLETYPEENUM }) => {
    const { isSuccess: updateSuccess, error: updateError, mutate: updateArticle, isPending: updatePending } = useUpdateArticle()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            persianTitle1: selectedRow && selectedRow.persianTitle1,
            persianTitle2: selectedRow && selectedRow.persianTitle2,
            englishTitle1: selectedRow && selectedRow.englishTitle1,
            englishTitle2: selectedRow && selectedRow.englishTitle2,


        }
    });
    const onSubmit = (data: FormSchemaType) => {


        const params = {
            persianTitle1: data.persianTitle1,
            persianTitle2: data.persianTitle2,
            englishTitle1: data.englishTitle1,
            englishTitle2: data.englishTitle2,
            articleType: articleType
        }
        const formData = new FormData()
        formData.append("dto", new Blob([JSON.stringify(params)], { type: "application/json" }))
        if (data.file) {
            formData.append("fileFiles", data.file)
        }
        updateArticle({ data: formData, id: selectedRow?.id, })
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
export default useUpdateArticleModal;





