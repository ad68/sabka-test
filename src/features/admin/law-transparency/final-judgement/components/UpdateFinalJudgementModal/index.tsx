import FormField from "@/components/kit/FormField";
import { Controller } from "react-hook-form";
import CustomTextBox from "@/components/kit/CustomTextBox";
import CustomButton from "@/components/kit/CustomButton";

import CustomDatepicker from "@/components/kit/CustomDatepicker";
import CustomTextArea from "@/components/kit/CustomTextArea";
import useUpdateFinalJudgementForm
    from "@/features/admin/law-transparency/final-judgement/hook/useUpdateFinalJudgementForm";
import CustomSelect from "@/components/kit/CustomSelect";

export default function Index({ reloadTable, onClose, selectedRow }: { reloadTable: () => void, onClose: () => void, selectedRow: any }) {
    const { control, errors, onSubmit, handleSubmit, updatePending, } = useUpdateFinalJudgementForm({ reloadTable: reloadTable, onClose: onClose, selectedRow: selectedRow })
    return <form className="grid grid-cols-1 gap-4 xl:grid-cols-2"
        onSubmit={handleSubmit(onSubmit)}>
        <FormField
            isError={errors.province}
            errorMessage={errors?.province?.message}
            title="استان"
        >
            <Controller
                name="province"
                control={control}
                render={({ field }) => (
                    <CustomTextBox
                        value={field.value}
                        placeholder="استان  را وارد کنید"
                        className="w-full"
                        onChange={(value) => field.onChange(value)}
                    />
                )}
            />
        </FormField>
        <FormField
            isError={errors.title}
            errorMessage={errors?.title?.message}
            title="موضوع"
        >
            <Controller
                name="title"
                control={control}
                render={({ field }) => (
                    <CustomTextBox
                        value={field.value}
                        placeholder="موضوع را وارد کنید"
                        className="w-full"
                        onChange={(value) => field.onChange(value)}
                    />
                )}
            />
        </FormField>
        <FormField
            isError={errors.jurisdictionBranch}
            errorMessage={errors?.jurisdictionBranch?.message}
            title="شعبه رسیدگی"
        >
            <Controller
                name="jurisdictionBranch"
                control={control}
                render={({ field }) => (
                    <CustomTextBox
                        value={field.value}
                        placeholder="شعبه رسیدگی را وارد کنید"
                        className="w-full"
                        onChange={(value) => field.onChange(value)}
                    />
                )}
            />
        </FormField>
        <FormField
            isError={errors.forAgainst}
            errorMessage={errors?.forAgainst?.message}
            title="له/علیه">
            <Controller
                name="forAgainst"
                control={control}
                render={({ field }) => (
                    <CustomSelect options={[{label:'له' , value:'له'},{label:'علیه' , value:'علیه'}]} value={field.value} onChange={(value) => field.onChange(value)} className="w-full" />
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
        <div className="col-span-1 xl:col-span-2 flex justify-end">
            <CustomButton loading={updatePending} size="small" className="mt-2">ویرایش</CustomButton>
        </div>
    </form>

}
