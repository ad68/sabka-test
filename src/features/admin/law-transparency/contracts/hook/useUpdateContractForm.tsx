import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationMessages } from "@/constants/validationMessage";
import { toastSuccess } from "@/components/kit/toast";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { dateToGregorian } from "@/utils";
import useUpdateContract from "./mutations/useUpdateContract";
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
const useCreateContractForm = ({ reloadTable, onClose, selectedRow }: { reloadTable: () => void, onClose: () => void, selectedRow: any }) => {
    const { isSuccess, mutate, isPending } = useUpdateContract()
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            contractingParty: selectedRow.contractingParty ?? "",
            dateOfHolding: selectedRow.dateOfHolding ? new Date(selectedRow.dateOfHolding) : undefined,
            dealType: selectedRow.dealType ?? undefined,
            estimatedAmount: selectedRow.estimatedAmount ? String(selectedRow.estimatedAmount) : "",
            other: selectedRow.other ?? "",
            resultDealType: selectedRow.resultDealType ?? "",
            totalAmountContract: selectedRow.totalAmountContract ? String(selectedRow.totalAmountContract) : "",
            year: selectedRow.year ?? undefined
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
            year: data.year

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
        isPending
    }
}
export default useCreateContractForm;