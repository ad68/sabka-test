import FormField from "@/components/kit/FormField";
import { Controller } from "react-hook-form";
import CustomTextBox from "@/components/kit/CustomTextBox";
import CustomButton from "@/components/kit/CustomButton";
import useUpdatePicturePromotionalForm
    from "@/features/admin/media/components/picture-promotional/hook/useUpdatePicturePromotionalForm";
import ImageViewer from "@/components/kit/ImageViewer";

export default function Index({ reloadTable, onClose, selectedRow }: { reloadTable: () => void, onClose: () => void, selectedRow: any }) {
    const { control, errors, onSubmit, handleSubmit, updatePending, } = useUpdatePicturePromotionalForm({
        reloadTable: reloadTable, onClose: onClose, selectedRow: selectedRow })
    console.log(selectedRow)
    return <form className="grid grid-cols-1 gap-4 xl:grid-cols-2 "
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

        <div className="col-span-1 xl:col-span-2 flex justify-end">
            <CustomButton loading={updatePending} size="small" className="mt-2">ویرایش</CustomButton>
        </div>
    </form>

}
