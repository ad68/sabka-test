import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationMessages } from "@/constants/validationMessage";
import { toastSuccess } from "@/components/kit/toast";
import { dateToGregorian, } from "@/utils";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useAddNotice from "./mutations/useAddNotice";
export const schema = z.object({
    persianTitle1: z
        .string({ required_error: validationMessages.required }).optional(),
    persianTitle2: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),
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
    coverPicture: z
        .custom<File>((val) => val instanceof File, {
            message: validationMessages.required,
        })
        .refine((file) => !file || file?.size > 0, { message: validationMessages.required }).optional(),
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

export type FormSchemaType = z.infer<typeof schema>
const useCreatePostForm = ({ reloadTable, onClose }: {
    reloadTable: () => void, onClose: () => void,

}) => {
    const { isSuccess, mutate, isPending } = useAddNotice()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            persianTitle1: "",
            persianTitle2: "",
            persianTitle3: "",
            englishTitle1: "",
            englishTitle2: "",
            englishTitle3: "",
            englishDescription: "",
            persianDescription: "",
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
            persianTitle3: data.persianTitle3,
            englishTitle1: data.englishTitle1,
            englishTitle2: data.englishTitle2,
            englishTitle3: data.englishTitle3,
            englishDescription: data.englishDescription,
            persianDescription: data.persianDescription,
            articleType: "NOTICE"
        }
        formData.append("dto", new Blob([JSON.stringify(dto)], { type: "application/json" }));
        formData.append("coverPicture", data.coverPicture)
        if (data.imageFiles && data.imageFiles.length > 0) {
            data.imageFiles.forEach((file: any) => {
                formData.append("imageFiles", file);
            });
        }

        if (data.videoFiles && data.videoFiles.length > 0) {
            data.videoFiles.forEach((file: any) => {
                formData.append("videoFiles", file);
            });
        }
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
export default useCreatePostForm;