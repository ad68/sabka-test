"use client";

import FormField from "@/components/kit/FormField";
import { Controller } from "react-hook-form";
import CustomTextBox from "@/components/kit/CustomTextBox";
import CustomButton from "@/components/kit/CustomButton";
import useCreateContractForm from "@/features/admin/law-transparency/contracts/hook/useCreateContractForm";
import CustomDatepicker from "@/components/kit/CustomDatepicker";
import CustomInputNumber from "@/components/kit/CustomInputNumber";

import CustomSelect from "@/components/kit/CustomSelect";


export default function Index({ reloadTable, onClose }: { reloadTable: () => void, onClose: () => void }) {
    const { control, errors, handleSubmit, onSubmit, isPending } = useCreateContractForm({ reloadTable: reloadTable, onClose: onClose });
    const years = Array.from({ length: 51 }, (_, i) => {
        const year = (1400 + i).toString();
        return {
            label: year,
            value: year,
        };
    });
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <FormField
                isError={errors.dealType}
                errorMessage={errors?.dealType?.message}
                title="نوع معامله"
            >
                <Controller
                    name="dealType"
                    control={control}
                    render={({ field }) => (
                        <CustomSelect
                            value={field.value}
                            options={[{ label: "مزایده", value: "BID" }, { label: "مناقصه", value: "TENDER" }]}
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.year}
                errorMessage={errors?.year?.message}
                title="سال">
                <Controller
                    name="year"
                    control={control}
                    render={({ field }) => (
                        <CustomSelect options={years} value={field.value} onChange={(value) => field.onChange(value)} className="w-full" />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.dateOfHolding}
                errorMessage={errors?.dateOfHolding?.message}
                title="تاریخ برگزاری"
            >
                <Controller
                    name="dateOfHolding"
                    control={control}
                    render={({ field }) => (
                        <CustomDatepicker value={field.value} onChange={(value) => field.onChange(value)} />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.resultDealType}
                errorMessage={errors?.resultDealType?.message}
                title="نتیجه"
            >
                <Controller
                    name="resultDealType"
                    control={control}
                    render={({ field }) => (
                        <CustomSelect
                            value={field.value}
                            options={[{ label: "قبول", value: "ACCEPT" }, { label: "اتمام قرارداد", value: "FINISHED" }]}
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>


            <FormField
                isError={errors.contractingParty}
                errorMessage={errors?.contractingParty?.message}
                title="طرف قرارداد"
            >
                <Controller
                    name="contractingParty"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox
                            value={field.value}
                            placeholder="طرف قرارداد را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.estimatedAmount}
                errorMessage={errors?.estimatedAmount?.message}
                title="مبلغ برآوردی (ریال)"
            >
                <Controller
                    name="estimatedAmount"
                    control={control}
                    render={({ field }) => (
                        <CustomInputNumber
                            value={field.value}
                            thousandSeparator
                            placeholder="مبلغ برآوردی را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.totalAmountContract}
                errorMessage={errors?.totalAmountContract?.message}
                title="مبلغ قرارداد (ریال)"
            >
                <Controller
                    name="totalAmountContract"
                    control={control}
                    render={({ field }) => (
                        <CustomInputNumber
                            value={field.value}
                            thousandSeparator
                            placeholder="مبلغ قرارداد را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.other}
                errorMessage={errors?.other?.message}
                title="سایر"
            >
                <Controller
                    name="other"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox
                            value={field.value}
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            {/*     <FormField
                isError={errors.dateContract}
                errorMessage={errors?.dateContract?.message}
                title="تاریخ قرارداد">
                <Controller
                    name="dateContract"
                    control={control}
                    render={({ field }) => (
                        <CustomDatepicker value={field.value} onChange={(value) => field.onChange(value)} />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.contractingParty}
                errorMessage={errors?.contractingParty?.message}
                title="طرف قرارداد"
            >
                <Controller
                    name="contractingParty"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox
                            value={field.value}
                            placeholder="طرف قرارداد را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.titleContract}
                errorMessage={errors?.titleContract?.message}
                title="موضوع قرارداد"
            >
                <Controller
                    name="titleContract"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox
                            value={field.value}
                            placeholder="موضوع قرارداد را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.amount}
                errorMessage={errors?.amount?.message}
                title="مبلغ(ریال)"
            >
                <Controller
                    name="amount"
                    control={control}
                    render={({ field }) => (
                        <CustomInputNumber
                            value={field.value}
                            placeholder="مبلغ"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.fromDate}
                errorMessage={errors?.fromDate?.message}
                title="از تاریخ">
                <Controller
                    name="fromDate"
                    control={control}
                    render={({ field }) => (
                        <CustomDatepicker value={field.value} onChange={(value) => field.onChange(value)} />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.toDate}
                errorMessage={errors?.toDate?.message}
                title="تا تاریخ">
                <Controller
                    name="toDate"
                    control={control}
                    render={({ field }) => (
                        <CustomDatepicker value={field.value} onChange={(value) => field.onChange(value)} />
                    )}
                />
            </FormField>
            <div className='col-span-2'>
                <FormField
                    isError={errors.description}
                    errorMessage={errors?.description?.message}
                    title="توضیحات"
                >
                    <Controller
                        name="description"
                        control={control}
                        render={({ field }) => (
                            <CustomTextArea
                                value={field.value}
                                placeholder="توضیحات را وارد کنید"
                                className="w-full"
                                onChange={(value) => field.onChange(value)}
                            />
                        )}
                    />
                </FormField>
            </div> */}

            <div className="xl:col-span-2 mt-4 flex justify-end">
                <CustomButton loading={isPending} className="w-[102px]">افزودن</CustomButton>
            </div>
        </form>
    );
}
