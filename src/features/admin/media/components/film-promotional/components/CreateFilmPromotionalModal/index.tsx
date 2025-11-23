"use client";

import FormField from "@/components/kit/FormField";
import { Controller } from "react-hook-form";
import CustomTextBox from "@/components/kit/CustomTextBox";
import { FileIcon } from "lucide-react";
import CustomButton from "@/components/kit/CustomButton";

import CustomInputFile from "@/components/kit/CustomInputFile";
import useCreateFilmPromotionalForm
    from "@/features/admin/media/components/film-promotional/hook/useCreateFilmPromotionalForm";

export default function Index({ reloadTable, onClose }: { reloadTable: () => void, onClose: () => void }) {
    const { control, errors, handleSubmit, onSubmit, isPending } = useCreateFilmPromotionalForm({ reloadTable: reloadTable, onClose: onClose });
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 xl:grid-cols-2 gap-4">


            <FormField
                isError={errors.persianTitle}
                errorMessage={errors?.persianTitle?.message}
                title="عنوان فارسی"
            >
                <Controller
                    name="persianTitle"
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
                isError={errors.englishTitle}
                errorMessage={errors?.englishTitle?.message}
                title="عنوان انگلیسی"
            >
                <Controller
                    name="englishTitle"
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
                isError={errors.file}
                errorMessage={errors?.file?.message}
                title="فایل فیلم"
                icon={<FileIcon className="w-[18px]" />}
            >
                <Controller
                    name="file"
                    control={control}
                    render={({ field }) => (
                        <CustomInputFile
                            value={field.value}
                            onChange={(value) => field.onChange(value)}
                            accept="video/*"
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
