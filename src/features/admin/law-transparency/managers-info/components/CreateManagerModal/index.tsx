"use client";

import FormField from "@/components/kit/FormField";
import { Controller } from "react-hook-form";
import CustomTextBox from "@/components/kit/CustomTextBox";
import CustomButton from "@/components/kit/CustomButton";

import CustomInputNumber from "@/components/kit/CustomInputNumber";
import CustomSelect from "@/components/kit/CustomSelect";
import useCreateManagerForm from "@/features/admin/law-transparency/managers-info/hook/useCreateManagerForm";


export default function Index({ reloadTable, onClose }: { reloadTable: () => void, onClose: () => void }) {
    const { control, errors, handleSubmit, onSubmit, isPending } = useCreateManagerForm({ reloadTable: reloadTable, onClose: onClose });

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <FormField
                isError={errors.firstName}
                errorMessage={errors?.firstName?.message}
                title="نام"
            >
                <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox
                            value={field.value}
                            placeholder="نام را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.lastName}
                errorMessage={errors?.lastName?.message}
                title="نام خانوادگی"
            >
                <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox
                            value={field.value}
                            placeholder="نام خانوادگی را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.educational}
                errorMessage={errors?.educational?.message}
                title="مدرک تحصیلی"
            >
                <Controller
                    name="educational"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox
                            value={field.value}
                            placeholder="مدرک تحصیلی را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.jobExperience}
                errorMessage={errors?.jobExperience?.message}
                title="سابقه کار"
            >
                <Controller
                    name="jobExperience"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox
                            value={field.value}
                            placeholder="سابقه کار را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.methodOfEmployment}
                errorMessage={errors?.methodOfEmployment?.message}
                title="نحوه به کارگیری">
                <Controller
                    name="methodOfEmployment"
                    control={control}
                    render={({ field }) => (
                        <CustomSelect options={[{label:'پاره وقت' , value:'پاره وقت'},{label:'تمام وقت' , value:'تمام وقت'}]} value={field.value} onChange={(value) => field.onChange(value)} className="w-full" />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.administrativeProcess}
                errorMessage={errors?.administrativeProcess?.message}
                title="فرآیند اداری"
            >
                <Controller
                    name="administrativeProcess"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox
                            value={field.value}
                            placeholder="فرآیند اداری را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.salary}
                errorMessage={errors?.salary?.message}
                title="میزان دریافتی(ریال)"
            >
                <Controller
                    name="salary"
                    control={control}
                    render={({ field }) => (
                        <CustomInputNumber
                            value={field.value}
                            placeholder="میزان دریافتی"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>

            <div className="xl:col-span-2 mt-4 flex justify-end">
                <CustomButton loading={isPending} className="w-[102px]">افزودن</CustomButton>
            </div>
        </form>
    );
}
