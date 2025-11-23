import FormField from "@/components/kit/FormField";
import {Download, FileIcon} from "lucide-react";
import { Controller } from "react-hook-form";
import CustomTextBox from "@/components/kit/CustomTextBox";
import CustomInputFile from "@/components/kit/CustomInputFile";
import CustomButton from "@/components/kit/CustomButton";
import useUpdateFilePromotionalForm
    from "@/features/admin/media/components/file-promotional/hook/useUpdateFilePromotionalForm";
import CustomSelect from "@/components/kit/CustomSelect";
import ImageViewer from "@/components/kit/ImageViewer";
import CustomDatepicker from "@/components/kit/CustomDatepicker";

export default function Index({ reloadTable, onClose, selectedRow }: { reloadTable: () => void, onClose: () => void, selectedRow: any }) {
    const { control, errors, onSubmit, handleSubmit, updatePending, } = useUpdateFilePromotionalForm({
        reloadTable: reloadTable, onClose: onClose, selectedRow: selectedRow })
    const years = Array.from({ length: 51 }, (_, i) => {
        const year = (1400 + i).toString();
        return {
            label: year,
            value: year,
        };
    });
    return <form className="grid grid-cols-1 gap-4 xl:grid-cols-2"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="col-span-2">
            <ImageViewer imageBase64={selectedRow?.fileUrl} />
        </div>
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
            isError={errors.datePublish}
            errorMessage={errors?.datePublish?.message}
            title="تاریخ">
            <Controller
                name="datePublish"
                control={control}
                render={({ field }) => (
                    <CustomDatepicker value={field.value} onChange={(value) => field.onChange(value)} />
                )}
            />
        </FormField>
        <FormField
            isError={errors.fileFiles}
            errorMessage={errors?.fileFiles?.message}
            title="فایل ها"
            icon={<FileIcon className="w-[18px]" />}
        >
            <Controller
                name="fileFiles"
                control={control}
                render={({ field }) => (
                    <CustomInputFile
                        value={field.value}
                        onChange={(value) => field.onChange(value)}
                        accept="application/pdf"
                        multiple={true}
                    />
                )}
            />
        </FormField>

        <div className="col-span-1 xl:col-span-2">
            <div className="flex flex-wrap justify-start w-full gap-1">
                {selectedRow.pictureOutputDTOList.map((docFile: any) => {
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
