"use client";

import FormField from "@/components/kit/FormField";
import { Controller } from "react-hook-form";
import CustomTextBox from "@/components/kit/CustomTextBox";
import CustomButton from "@/components/kit/CustomButton";

import CustomDatepicker from "@/components/kit/CustomDatepicker";
import CustomTextArea from "@/components/kit/CustomTextArea";
import useCreateFinalJudgementForm
    from "@/features/admin/law-transparency/final-judgement/hook/useCreateFinalJudgementForm";
import CustomSelect from "@/components/kit/CustomSelect";


export default function Index({ reloadTable, onClose }: { reloadTable: () => void, onClose: () => void }) {
    const { control, errors, handleSubmit, onSubmit, isPending } = useCreateFinalJudgementForm({ reloadTable: reloadTable, onClose: onClose });

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <FormField
                isError={errors.province}
                errorMessage={errors?.province?.message}
                title="استان"
            >
                <Controller
                    name="province"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox
                            value={field.value}
                            placeholder="استان  را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.title}
                errorMessage={errors?.title?.message}
                title="موضوع"
            >
                <Controller
                    name="title"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox
                            value={field.value}
                            placeholder="موضوع را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.jurisdictionBranch}
                errorMessage={errors?.jurisdictionBranch?.message}
                title="شعبه رسیدگی"
            >
                <Controller
                    name="jurisdictionBranch"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox
                            value={field.value}
                            placeholder="شعبه رسیدگی را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.forAgainst}
                errorMessage={errors?.forAgainst?.message}
                title="له/علیه">
                <Controller
                    name="forAgainst"
                    control={control}
                    render={({ field }) => (
                        <CustomSelect options={[{label:'له' , value:'له'},{label:'علیه' , value:'علیه'}]} value={field.value} onChange={(value) => field.onChange(value)} className="w-full" />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.date}
                errorMessage={errors?.date?.message}
                title="تاریخ">
                <Controller
                    name="date"
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
            </div>

            <div className="xl:col-span-2 mt-4 flex justify-end">
                <CustomButton loading={isPending} className="w-[102px]">افزودن</CustomButton>
            </div>
        </form>
    );
}
