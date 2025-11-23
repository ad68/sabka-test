"use client";

import FormField from "@/components/kit/FormField";
import { Controller } from "react-hook-form";
import CustomTextBox from "@/components/kit/CustomTextBox";
import { FileIcon } from "lucide-react";
import CustomButton from "@/components/kit/CustomButton";

import CustomInputFile from "@/components/kit/CustomInputFile";
import useCreatePublicationForm from "@/features/admin/publication/hook/useCreatePublicationForm";
import CustomSelect from "@/components/kit/CustomSelect";

export default function Index({ reloadTable, onClose }: { reloadTable: () => void, onClose: () => void }) {
    const { control, errors, handleSubmit, onSubmit, isPending } = useCreatePublicationForm({ reloadTable: reloadTable, onClose: onClose, articleType:'PUBLICATION' });
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
                isError={errors.coverPicture}
                errorMessage={errors?.coverPicture?.message}
                title="تصویر کاور"
                icon={<FileIcon className="w-[18px]" />}
            >
                <Controller
                    name="coverPicture"
                    control={control}
                    render={({ field }) => (
                        <CustomInputFile
                            value={field.value}
                            onChange={(value) => field.onChange(value)}
                            accept="image/*"
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.persianTitle1}
                errorMessage={errors?.persianTitle1?.message}
                title="عنوان فارسی"
            >
                <Controller
                    name="persianTitle1"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox
                            value={field.value}
                            placeholder="عنوان فارسی را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.englishTitle1}
                errorMessage={errors?.englishTitle1?.message}
                title="عنوان انگلیسی"
            >
                <Controller
                    name="englishTitle1"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox
                            value={field.value}
                            placeholder="عنوان انگلیسی را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>

            <FormField
                isError={errors.persianTitle2}
                errorMessage={errors?.persianTitle2?.message}
                title="موضوع فارسی"
            >
                <Controller
                    name="persianTitle2"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox
                            value={field.value}
                            placeholder="موضوع فارسی را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.englishTitle2}
                errorMessage={errors?.englishTitle2?.message}
                title="موضوع انگلیسی"
            >
                <Controller
                    name="englishTitle2"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox
                            value={field.value}
                            placeholder="موضوع انگلیسی را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.persianPublicationName}
                errorMessage={errors?.persianPublicationName?.message}
                title="نام نشریه فارسی"
            >
                <Controller
                    name="persianPublicationName"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox
                            value={field.value}
                            placeholder="نام نشریه فارسی را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.englishPublicationName}
                errorMessage={errors?.englishPublicationName?.message}
                title="نام نشریه انگلیسی"
            >
                <Controller
                    name="englishPublicationName"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox
                            value={field.value}
                            placeholder="نام نشریه انگلیسی را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.quarterlyIssue}
                errorMessage={errors?.quarterlyIssue?.message}
                title="شماره فصلنامه"
            >
                <Controller
                    name="quarterlyIssue"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox
                            value={field.value}
                            placeholder="شماره فصلنامه را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.yearPublish}
                errorMessage={errors?.yearPublish?.message}
                title="سال انتشار">
                <Controller
                    name="yearPublish"
                    control={control}
                    render={({ field }) => (
                        <CustomSelect options={years} value={field.value} onChange={(value) => field.onChange(value)} className="w-full" />
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

            <div className="xl:col-span-2 mt-4 flex justify-end">
                <CustomButton loading={isPending} className="w-[102px]">افزودن</CustomButton>
            </div>
        </form>
    );
}
