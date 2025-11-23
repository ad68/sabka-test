"use client";

import FormField from "@/components/kit/FormField";
import { Controller } from "react-hook-form";
import CustomTextBox from "@/components/kit/CustomTextBox";
import CustomButton from "@/components/kit/CustomButton";


import CustomSelect from "@/components/kit/CustomSelect";

import CustomTextArea from "@/components/kit/CustomTextArea";
import useUpdateProvinceCompanyModal from "../../hook/useUpdateProvinceCompanyModal";


export default function Index({ reloadTable, onClose, selectedRow }: { reloadTable: () => void, onClose: () => void, selectedRow: any }) {
    const { control, errors, handleSubmit, onSubmit, isPending, provinces, provincesLoading } = useUpdateProvinceCompanyModal({ reloadTable: reloadTable, onClose: onClose, selectedRow: selectedRow });

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <FormField
                isError={errors.province}
                errorMessage={errors?.province?.message}
                title="استان">
                <Controller
                    name="province"
                    control={control}
                    render={({ field }) => (
                        <CustomSelect loading={provincesLoading} options={provinces ? provinces?.map((item: any) => ({ label: item.name, value: item.id })) : []} value={field.value} onChange={(value) => field.onChange(value)} className="w-full" />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.companyName}
                errorMessage={errors?.companyName?.message}
                title="نام شرکت"
            >
                <Controller
                    name="companyName"
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
                isError={errors.code}
                errorMessage={errors?.code?.message}
                title="کد نمایندگی"
            >
                <Controller
                    name="code"
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
                isError={errors.name}
                errorMessage={errors?.name?.message}
                title="نام"
            >
                <Controller
                    name="name"
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
                isError={errors.activities}
                errorMessage={errors?.activities?.message}
                title="انواع فعالیت"
            >
                <Controller
                    name="activities"
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
                isError={errors.phoneNumber}
                errorMessage={errors?.phoneNumber?.message}
                title="تلفن مستقیم"
            >
                <Controller
                    name="phoneNumber"
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
            <div className="col-span-2">
                <FormField
                    isError={errors.address}
                    errorMessage={errors?.address?.message}
                    title="آدرس"
                >
                    <Controller
                        name="address"
                        control={control}
                        render={({ field }) => (
                            <CustomTextArea
                                value={field.value}
                                placeholder="سابقه کار را وارد کنید"
                                className="w-full"
                                onChange={(value) => field.onChange(value)}
                            />
                        )}
                    />
                </FormField>
            </div>

            <div className="xl:col-span-2 mt-4 flex justify-end">
                <CustomButton loading={isPending} className="w-[102px]">ویرایش</CustomButton>
            </div>
        </form>
    );
}
