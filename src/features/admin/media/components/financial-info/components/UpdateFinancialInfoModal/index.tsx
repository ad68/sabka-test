import FormField from "@/components/kit/FormField";
import { Download } from "lucide-react";
import { Controller } from "react-hook-form";
import CustomTextBox from "@/components/kit/CustomTextBox";
import CustomInputFile from "@/components/kit/CustomInputFile";
import CustomButton from "@/components/kit/CustomButton";
import ImageViewer from "@/components/kit/ImageViewer";
import useUpdateFinancialInfoForm
    from "@/features/admin/media/components/financial-info/hook/useUpdateFinancialInfoForm";

export default function Index({ reloadTable, onClose, selectedRow }: { reloadTable: () => void, onClose: () => void, selectedRow: any }) {
    const { control, errors, onSubmit, handleSubmit, updatePending, } = useUpdateFinancialInfoForm({ reloadTable: reloadTable, onClose: onClose, selectedRow: selectedRow })
    return <form className="grid grid-cols-1 gap-4 xl:grid-cols-2"
        onSubmit={handleSubmit(onSubmit)}>
        <ImageViewer imageBase64={selectedRow?.fileUrl} />

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
                        value={field.value || ''}
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
                        value={field.value || ''}
                        placeholder="عنوان انگلیسی را وارد کنید"
                        className="w-full"
                        onChange={(value) => field.onChange(value)}
                    />
                )}
            />
        </FormField>
        <FormField
            isError={errors.fileFiles}
            errorMessage={errors?.fileFiles?.message}
            title="فایل ها"
        >

            <Controller
                name="fileFiles"
                control={control}
                render={({ field }) => (
                    <CustomInputFile multiple={true} value={field.value} onChange={field.onChange} />
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
