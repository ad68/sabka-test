import FormField from "@/components/kit/FormField";
import { Download, FileIcon } from "lucide-react";
import { Controller } from "react-hook-form";
import CustomTextBox from "@/components/kit/CustomTextBox";
import CustomInputFile from "@/components/kit/CustomInputFile";
import CustomButton from "@/components/kit/CustomButton";
import useUpdatePostModal from "@/features/admin/post/hook/useUpdatePostForm";
import ImageViewer from "@/components/kit/ImageViewer";
import CustomTextEditor from "@/components/kit/CustomTextEditor";

export default function Index({ reloadTable, onClose, selectedRow }: { reloadTable: () => void, onClose: () => void, selectedRow: any }) {
    const { control, errors, onSubmit, handleSubmit, updatePending, } = useUpdatePostModal({ reloadTable: reloadTable, onClose: onClose, selectedRow: selectedRow, articleType: 'POST' })
    return <form className="grid grid-cols-1 gap-4 xl:grid-cols-2"
        onSubmit={handleSubmit(onSubmit)}>
        <div className='col-span-2'>
            <ImageViewer imageBase64={selectedRow?.fileUrl} />
        </div>
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
            title="خلاصه فارسی"
        >
            <Controller
                name="persianTitle2"
                control={control}
                render={({ field }) => (
                    <CustomTextBox
                        value={field.value}
                        placeholder="خلاصه فارسی را وارد کنید"
                        className="w-full"
                        onChange={(value) => field.onChange(value)}
                    />
                )}
            />
        </FormField>
        <FormField
            isError={errors.englishTitle2}
            errorMessage={errors?.englishTitle2?.message}
            title="خلاصه انگلیسی"
        >
            <Controller
                name="englishTitle2"
                control={control}
                render={({ field }) => (
                    <CustomTextBox
                        value={field.value}
                        placeholder="خلاصه انگلیسی را وارد کنید"
                        className="w-full"
                        onChange={(value) => field.onChange(value)}
                    />
                )}
            />
        </FormField>
        <FormField
            isError={errors.persianTitle3}
            errorMessage={errors?.persianTitle3?.message}
            title="عنوان کوتاه فارسی"
        >
            <Controller
                name="persianTitle3"
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
            isError={errors.englishTitle3}
            errorMessage={errors?.englishTitle3?.message}
            title="عنوان کوتاه انگلیسی"
        >
            <Controller
                name="englishTitle3"
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
        <div className="col-span-1 xl:col-span-2">
            <div className="flex flex-wrap justify-start w-full gap-1">
                {selectedRow.documentFiles.map((docFile: any) => {
                    return (
                        <a
                            key={docFile.fileUrl}
                            href={docFile.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col justify-center items-center p-4 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
                        >
                            <Download className="w-8 h-8 text-primary mb-2" />
                            <span className="text-primary text-center text-sm">دانلود فایل ها</span>
                        </a>
                    );
                })}
            </div>
        </div>


        <div className="col-span-1 xl:col-span-2 flex justify-end">
            <CustomButton loading={updatePending} size="small" className="mt-2">ویرایش</CustomButton>
        </div>
    </form>

}
