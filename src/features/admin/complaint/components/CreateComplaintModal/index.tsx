"use client";

import FormField from "@/components/kit/FormField";
import { Controller } from "react-hook-form";
import CustomTextBox from "@/components/kit/CustomTextBox";
import CustomButton from "@/components/kit/CustomButton";
import CustomDatepicker from "@/components/kit/CustomDatepicker";
import CustomInputNumber from "@/components/kit/CustomInputNumber";
import CustomTextArea from "@/components/kit/CustomTextArea";
import CustomSelect from "@/components/kit/CustomSelect";
import useCreateComplaintForm from "@/features/admin/complaint/hook/useCreateComplaintForm";
import {FileIcon} from "lucide-react";
import CustomInputFile from "@/components/kit/CustomInputFile";


export default function Index({ reloadTable, onClose }: { reloadTable: () => void, onClose: () => void }) {
    const { control, errors, handleSubmit, onSubmit, isPending } = useCreateComplaintForm({ reloadTable: reloadTable, onClose: onClose });

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <FormField
                isError={errors.nationalCode}
                errorMessage={errors?.nationalCode?.message}
                title="کد ملی"
            >
                <Controller
                    name="nationalCode"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox
                            value={field.value}
                            placeholder="کد ملی را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
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
                            placeholder="نام شرکت را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.userName}
                errorMessage={errors?.userName?.message}
                title="نام کاربری"
            >
                <Controller
                    name="userName"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox
                            value={field.value}
                            placeholder="نام کاربری را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.email}
                errorMessage={errors?.email?.message}
                title="ایمیل"
            >
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox
                            value={field.value}
                            placeholder="ایمیل را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.phoneNumber}
                errorMessage={errors?.phoneNumber?.message}
                title="شماره تلفن"
            >
                <Controller
                    name="phoneNumber"
                    control={control}
                    render={({ field }) => (
                        <CustomInputNumber
                            value={field.value}
                            placeholder="شماره تلفن را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.mobileNumber}
                errorMessage={errors?.mobileNumber?.message}
                title="شماره همراه"
            >
                <Controller
                    name="mobileNumber"
                    control={control}
                    render={({ field }) => (
                        <CustomInputNumber
                            value={field.value}
                            placeholder="شماره همراه را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.complaintType}
                errorMessage={errors?.complaintType?.message}
                title="نوع شکایت">
                <Controller
                    name="complaintType"
                    control={control}
                    render={({ field }) => (
                        <CustomSelect options={[{label:'شکایت' , value:'COMPLAINT'}]} value={field.value} onChange={(value) => field.onChange(value)} className="w-full" />
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
            <FormField
                isError={errors.file}
                errorMessage={errors?.file?.message}
                title="فایل"
                icon={<FileIcon className="w-[18px]" />}
            >
                <Controller
                    name="file"
                    control={control}
                    render={({ field }) => (
                        <CustomInputFile
                            value={field.value}
                            onChange={(value) => field.onChange(value)}
                            accept="application/pdf"
                        />
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
