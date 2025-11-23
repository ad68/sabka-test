import FormField from "@/components/kit/FormField";
import { Controller } from "react-hook-form";
import CustomTextBox from "@/components/kit/CustomTextBox";
import CustomButton from "@/components/kit/CustomButton";

import CustomInputNumber from "@/components/kit/CustomInputNumber";
import CustomSelect from "@/components/kit/CustomSelect";
import useUpdateManagerForm from "@/features/admin/law-transparency/managers-info/hook/useUpdateManagerForm";

export default function Index({ reloadTable, onClose, selectedRow }: { reloadTable: () => void, onClose: () => void, selectedRow: any }) {
    const { control, errors, onSubmit, handleSubmit, updatePending, } = useUpdateManagerForm({ reloadTable: reloadTable, onClose: onClose, selectedRow: selectedRow })
    return <form className="grid grid-cols-1 gap-4 xl:grid-cols-2"
        onSubmit={handleSubmit(onSubmit)}>
        <FormField
            isError={errors.firstName}
            errorMessage={errors?.firstName?.message}
            title="نام"
        >
            <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                    <CustomTextBox
                        value={field.value}
                        placeholder="نام را وارد کنید"
                        className="w-full"
                        onChange={(value) => field.onChange(value)}
                    />
                )}
            />
        </FormField>
        <FormField
            isError={errors.lastName}
            errorMessage={errors?.lastName?.message}
            title="نام خانوادگی"
        >
            <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                    <CustomTextBox
                        value={field.value}
                        placeholder="نام خانوادگی را وارد کنید"
                        className="w-full"
                        onChange={(value) => field.onChange(value)}
                    />
                )}
            />
        </FormField>
        <FormField
            isError={errors.educational}
            errorMessage={errors?.educational?.message}
            title="مدرک تحصیلی"
        >
            <Controller
                name="educational"
                control={control}
                render={({ field }) => (
                    <CustomTextBox
                        value={field.value}
                        placeholder="مدرک تحصیلی را وارد کنید"
                        className="w-full"
                        onChange={(value) => field.onChange(value)}
                    />
                )}
            />
        </FormField>
        <FormField
            isError={errors.jobExperience}
            errorMessage={errors?.jobExperience?.message}
            title="سابقه کار"
        >
            <Controller
                name="jobExperience"
                control={control}
                render={({ field }) => (
                    <CustomTextBox
                        value={field.value}
                        placeholder="سابقه کار را وارد کنید"
                        className="w-full"
                        onChange={(value) => field.onChange(value)}
                    />
                )}
            />
        </FormField>
        <FormField
            isError={errors.methodOfEmployment}
            errorMessage={errors?.methodOfEmployment?.message}
            title="نحوه به کارگیری">
            <Controller
                name="methodOfEmployment"
                control={control}
                render={({ field }) => (
                    <CustomSelect options={[{label:'پاره وقت' , value:'پاره وقت'},{label:'تمام وقت' , value:'تمام وقت'}]} value={field.value} onChange={(value) => field.onChange(value)} className="w-full" />
                )}
            />
        </FormField>
        <FormField
            isError={errors.administrativeProcess}
            errorMessage={errors?.administrativeProcess?.message}
            title="فرآیند اداری"
        >
            <Controller
                name="administrativeProcess"
                control={control}
                render={({ field }) => (
                    <CustomTextBox
                        value={field.value}
                        placeholder="فرآیند اداری را وارد کنید"
                        className="w-full"
                        onChange={(value) => field.onChange(value)}
                    />
                )}
            />
        </FormField>
        <FormField
            isError={errors.salary}
            errorMessage={errors?.salary?.message}
            title="میزان دریافتی(ریال)"
        >
            <Controller
                name="salary"
                control={control}
                render={({ field }) => (
                    <CustomInputNumber
                        value={field.value}
                        placeholder="میزان دریافتی"
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
