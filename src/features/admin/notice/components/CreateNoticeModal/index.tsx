"use client";

import FormField from "@/components/kit/FormField";
import { Controller } from "react-hook-form";
import CustomTextBox from "@/components/kit/CustomTextBox";
import { FileIcon } from "lucide-react";
import CustomButton from "@/components/kit/CustomButton";
import CustomInputFile from "@/components/kit/CustomInputFile";
import CustomTextEditor from "@/components/kit/CustomTextEditor";
import useCreateNoticeForm from "../../hook/useCreateNoticeForm";

export default function Index({ reloadTable, onClose }: { reloadTable: () => void, onClose: () => void }) {
    const { control, errors, handleSubmit, onSubmit, isPending } = useCreateNoticeForm({ reloadTable: reloadTable, onClose: onClose });

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <div className='col-span-2'>
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
            </div>

            <FormField
                isError={errors.persianTitle2}
                errorMessage={errors?.persianTitle2?.message}
                title="عنوان فارسی"
            >
                <Controller
                    name="persianTitle2"
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
                isError={errors.englishTitle2}
                errorMessage={errors?.englishTitle2?.message}
                title="عنوان انگلیسی"
            >
                <Controller
                    name="englishTitle2"
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
                isError={errors.persianTitle1}
                errorMessage={errors?.persianTitle1?.message}
                title="عنوان کوتاه فارسی"
            >
                <Controller
                    name="persianTitle1"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox
                            value={field.value}
                            placeholder="عنوان کوتاه فارسی را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.englishTitle1}
                errorMessage={errors?.englishTitle1?.message}
                title="عنوان کوتاه انگلیسی"
            >
                <Controller
                    name="englishTitle1"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox
                            value={field.value}
                            placeholder="عنوان کوتاه انگلیسی را وارد کنید"
                            className="w-full"
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
            </FormField>

            <FormField
                isError={errors.persianTitle3}
                errorMessage={errors?.persianTitle3?.message}
                title="خلاصه فارسی"
            >
                <Controller
                    name="persianTitle3"
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


            <FormField
                isError={errors.englishTitle3}
                errorMessage={errors?.englishTitle3?.message}
                title="خلاصه انگلیسی"
            >
                <Controller
                    name="englishTitle3"
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
            <FormField
                isError={errors.imageFiles}
                errorMessage={errors?.imageFiles?.message}
                title="فایل تصاویر"
                icon={<FileIcon className="w-[18px]" />}
            >
                <Controller
                    name="imageFiles"
                    control={control}
                    render={({ field }) => (
                        <CustomInputFile
                            value={field.value || []}
                            onChange={(value) => field.onChange(value)}
                            accept="image/*"
                            multiple={true}
                        />
                    )}
                />
            </FormField>
            <FormField
                isError={errors.videoFiles}
                errorMessage={errors?.videoFiles?.message}
                title="فایل فیلم ها"
                icon={<FileIcon className="w-[18px]" />}
            >
                <Controller
                    name="videoFiles"
                    control={control}
                    render={({ field }) => (
                        <CustomInputFile
                            value={field.value}
                            onChange={(value) => field.onChange(value)}
                            accept="video/*"
                            multiple={true}
                        />
                    )}
                />
            </FormField>
            <div className="col-span-2">
                <FormField
                    isError={errors.persianDescription}
                    errorMessage={errors?.persianDescription?.message}
                    title="متن فارسی"
                >
                    <Controller
                        name="persianDescription"
                        control={control}
                        render={({ field }) => (
                            <CustomTextEditor
                                value={field.value}
                                onChange={(value: any) => field.onChange(value)}

                            />
                        )}
                    />
                </FormField>
            </div>
            <div className="col-span-2">
                <FormField
                    isError={errors.englishDescription}
                    errorMessage={errors?.englishDescription?.message}
                    title="متن انگلیسی"
                >
                    <Controller
                        name="englishDescription"
                        control={control}
                        render={({ field }) => (
                            <CustomTextEditor
                                value={field.value}
                                onChange={(value: any) => field.onChange(value)}

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
