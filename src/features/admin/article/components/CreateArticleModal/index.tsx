"use client";

import FormField from "@/components/kit/FormField";
import { Controller } from "react-hook-form";
import CustomTextBox from "@/components/kit/CustomTextBox";
import { FileIcon } from "lucide-react";
import CustomButton from "@/components/kit/CustomButton";

import CustomInputFile from "@/components/kit/CustomInputFile";
import useCreateArticleForm from "@/features/admin/article/hook/useCreateArticleForm";

export default function Index({ reloadTable, onClose }: { reloadTable: () => void, onClose: () => void }) {
    const { control, errors, handleSubmit, onSubmit, isPending } = useCreateArticleForm({ reloadTable: reloadTable, onClose: onClose, articleType:'REGULATION' });

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 xl:grid-cols-2 gap-4">
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
