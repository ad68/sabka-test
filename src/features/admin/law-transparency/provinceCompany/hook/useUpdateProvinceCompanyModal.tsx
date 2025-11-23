import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationMessages } from "@/constants/validationMessage";
import { toastSuccess } from "@/components/kit/toast";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useFetchProvincesQuery from "./queries/useFetchProvincesQuery";

import useUpdateProvinceCompanyMutation from "./mutations/useUpdateProvinceCompanyMutation";
export const schema = z.object({
    province: z.number({
        required_error: validationMessages.required,
        invalid_type_error: validationMessages.required,
    }),
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
const useUpdateProvinceCompanyModal = ({ reloadTable, onClose, selectedRow }: { reloadTable: () => void, onClose: () => void, selectedRow: any }) => {
    const { isSuccess, mutate, isPending } = useUpdateProvinceCompanyMutation()
    const { data: provinces, isFetching: provincesLoading } = useFetchProvincesQuery()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            province: selectedRow.provinceId ? Number(selectedRow.provinceId) : undefined,
            companyName: selectedRow.companyName ? selectedRow.companyName : "",
            code: selectedRow.code ? selectedRow.code : "",
            name: selectedRow.name ? selectedRow.name : "",
            activities: selectedRow.activities ? selectedRow.activities : "",
            address: selectedRow.address ? selectedRow.address : "",
            phoneNumber: selectedRow.phoneNumber ? selectedRow.phoneNumber : "",

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
        mutate({ data: params, id: selectedRow.id })
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
export default useUpdateProvinceCompanyModal;