import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationMessages } from "@/constants/validationMessage";
import { toastSuccess } from "@/components/kit/toast";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useFetchProvincesQuery from "./queries/useFetchProvincesQuery";
import useCreateProvinceCompany from "./mutations/useCreateProvinceCompany";
export const schema = z.object({
    province: z
        .number({ required_error: validationMessages.required }),
    companyName: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),
    code: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),
    name: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),

    activities: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),
    address: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),
    phoneNumber: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),


});

export type FormSchemaType = z.infer<typeof schema>
const useCreateProvinceCompanyModal = ({ reloadTable, onClose }: { reloadTable: () => void, onClose: () => void, }) => {
    const { isSuccess, mutate, isPending } = useCreateProvinceCompany()
    const { data: provinces, isFetching: provincesLoading } = useFetchProvincesQuery()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            province: undefined,
            companyName: "",
            code: "",
            name: "",
            activities: "",
            address: "",
            phoneNumber: "",

        }
    });
    const onSubmit = (data: any) => {
        console.log(data)
        const params = {
            provinceId: data.province,
            companyName: data.companyName,
            code: data.code,
            name: data.name,
            activities: data.activities,
            address: data.address,
            phoneNumber: data.phoneNumber,
        }
        mutate({ data: params })
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
        isPending,
        provinces,
        provincesLoading
    }
}
export default useCreateProvinceCompanyModal;