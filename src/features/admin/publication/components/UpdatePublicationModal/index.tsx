import FormField from "@/components/kit/FormField";
import { Download } from "lucide-react";
import { Controller } from "react-hook-form";
import CustomTextBox from "@/components/kit/CustomTextBox";
import CustomInputFile from "@/components/kit/CustomInputFile";
import CustomButton from "@/components/kit/CustomButton";
import useUpdatePublicationModal from "@/features/admin/publication/hook/useUpdatePublicationForm";
import CustomSelect from "@/components/kit/CustomSelect";
import ImageViewer from "@/components/kit/ImageViewer";

export default function Index({ reloadTable, onClose, selectedRow }: { reloadTable: () => void, onClose: () => void, selectedRow: any }) {
    const { control, errors, onSubmit, handleSubmit, updatePending, } = useUpdatePublicationModal({ reloadTable: reloadTable, onClose: onClose, selectedRow: selectedRow, articleType:'PUBLICATION' })
    const years = Array.from({ length: 51 }, (_, i) => {
        const year = (1400 + i).toString();
        return {
            label: year,
            value: year,
        };
    });
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
                        value={field.value || ''}
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
                        value={field.value || ''}
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
                        value={field.value || ''}
                        placeholder="موضوع  فارسی را وارد کنید"
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
                        value={field.value || ''}
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
        >
            <Controller
                name="file"
                control={control}
                render={({ field }) => (
                    <CustomInputFile
                        accept="application/pdf"
                        value={field.value}
                        onChange={(value) => field.onChange(value)}
                    />
                )}
            />
        </FormField>
        <div>
            <a href={selectedRow.documentFiles[0].fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                type="button"
                className="flex justify-center  items-center h-[38px] border border-primary mt-[25px]  text-primary rounded-lg"
            >
                <Download className="w-[20px]" />
                <span>دانلود فایل</span>
            </a>
        </div>

        <div className="col-span-1 xl:col-span-2 flex justify-end">
            <CustomButton loading={updatePending} size="small" className="mt-2">ویرایش</CustomButton>
        </div>
    </form>

}
