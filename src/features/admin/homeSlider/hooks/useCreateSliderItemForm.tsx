import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationMessages } from "@/constants/validationMessage";
import { toastSuccess } from "@/components/kit/toast";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useCreateSliderItemMutation from "./mutations/useCreateSliderItemMutation";
export const schema = z.object({
    persianTitle: z
        .string({ required_error: validationMessages.required }).nonempty({ message: validationMessages.required }),
    englishTitle: z
        .string({ required_error: validationMessages.required }).optional(),

    sliderFileUrl: z
        .custom<File>((val) => val instanceof File, {
            message: validationMessages.required,
        })
        .refine((file) => !file || file?.size > 0, { message: validationMessages.required }),
});

export type FormSchemaType = z.infer<typeof schema>
const useCreateSliderItemForm = ({ reloadTable, onClose }: { reloadTable: () => void, onClose: () => void, }) => {
    const { isSuccess, mutate, isPending } = useCreateSliderItemMutation()
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
        }
        formData.append("dto", new Blob([JSON.stringify(dto)], { type: "application/json" }))
        formData.append("sliderFileUrl", data.sliderFileUrl)
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
export default useCreateSliderItemForm;