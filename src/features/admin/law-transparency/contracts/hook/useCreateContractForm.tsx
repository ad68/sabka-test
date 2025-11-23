import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationMessages } from "@/constants/validationMessage";
import { toastSuccess } from "@/components/kit/toast";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useAddContract from "@/features/admin/law-transparency/contracts/hook/mutations/useAddContract";
import { dateToGregorian } from "@/utils";
export const schema = z.object({
    dealType: z
        .string({ required_error: validationMessages.required }),
    other: z
        .string({ required_error: validationMessages.required }).optional(),
    resultDealType: z
        .string({ required_error: validationMessages.required }).nonempty(validationMessages.required),
    estimatedAmount: z
        .string({ required_error: validationMessages.required }).optional(),
    dateOfHolding: z
        .date({ required_error: validationMessages.required }),
    contractingParty: z
        .string({ required_error: validationMessages.required }),
    totalAmountContract: z
        .string({ required_error: validationMessages.required }).optional(),
    year: z
        .string({ required_error: validationMessages.required }).optional(),

});

export type FormSchemaType = z.infer<typeof schema>
const useCreateContractForm = ({ reloadTable, onClose }: { reloadTable: () => void, onClose: () => void }) => {
    const { isSuccess, mutate, isPending } = useAddContract()
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            contractingParty: "",
            dateOfHolding: undefined,
            dealType: undefined,
            estimatedAmount: "",
            other: "",
            resultDealType: "",
            totalAmountContract: ""
        }
    });
    const onSubmit = (data: FormSchemaType) => {
        console.log(data)
        const params = {
            dealType: data.dealType,
            dateOfHolding: dateToGregorian(data.dateOfHolding),
            other: data.other,
            resultDealType: data.resultDealType,
            estimatedAmount: data.estimatedAmount,
            contractingParty: data.contractingParty,
            totalAmountContract: data.totalAmountContract,
            /*   year: data.year */

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
        isPending
    }
}
export default useCreateContractForm;