import { ContactLeafIcon } from "@/assets/icons/ContactLeafIcon";
import CustomButton from "@/components/kit/CustomButton";
import CustomTextArea from "@/components/kit/CustomTextArea";
import CustomTextBox from "@/components/kit/CustomTextBox";
import { MailIcon, PhoneIcon, User2Icon } from "lucide-react";
import Image from "next/image";
import useContactUsForm from "../../hook/useContactUsForm";
import FormField from "@/components/kit/FormField";
import { Controller } from "react-hook-form";

export default function Index() {
    const { control, errors, handleSubmit, onSubmit } = useContactUsForm()
    return <div className="w-full flex flex-col xl:flex-row max-w-[1135px] justify-between xl:h-[550px] m-auto bg-white mt-[102px] overflow-hidden xl:rounded-[30px]">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full self-start xl:w-[655px] h-auto grid grid-cols-1 xl:grid-cols-2 gap-[16px] xl:gap-y-[10px] px-[46px] py-[30px]">
            <div className="xl:col-span-2 mb-[10px]">
                <div className="bg-[#F5F5F5] text-primary w-[176px] h-[30px] text-[14px] font-bold flex justify-center items-center rounded-full">
                    <ContactLeafIcon className="w-[20px]" />
                    با من تماس بگیرید</div>
                <h2 className="col-span-2 mt-[19px] text-[px] xl:text-[36px] text-secondary font-bold">
                    سوالی دارید؟ با ما تماس بگیرید
                </h2>
            </div>
            <FormField icon={<User2Icon className="w-[18px]" />} isError={errors.firstName} errorMessage={errors?.firstName?.message} title="نام">
                <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox value={field.value} placeholder="نام خود را وارد کنید" className="w-full" onChange={(value) => field.onChange(value)} />
                    )}
                />
            </FormField>
            <FormField icon={<User2Icon className="w-[18px]" />} isError={errors.lastName} errorMessage={errors?.lastName?.message} title="نام خانوادگی">
                <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox value={field.value} placeholder="نام خانوادگی خود را وارد کنید" className="w-full" onChange={(value) => field.onChange(value)} />
                    )}
                />
            </FormField>
            <FormField icon={<PhoneIcon className="w-[18px]" />} isError={errors.mobileNumber} errorMessage={errors?.mobileNumber?.message} title="شماره موبایل">
                <Controller
                    name="mobileNumber"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox value={field.value} placeholder=" شماره موبایل خود را وارد کنید" className="w-full" onChange={(value) => field.onChange(value)} />
                    )}
                />
            </FormField>
            <FormField icon={<MailIcon className="w-[18px]" />} isError={errors.email} errorMessage={errors?.email?.message} title="ایمیل">
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox value={field.value} placeholder="ایمیل خود را وارد کنید" className="w-full" onChange={(value) => field.onChange(value)} />
                    )}
                />
            </FormField>
            <div className="xl:col-span-2">
                <FormField icon={<MailIcon className="w-[18px]" />} isError={errors.description} errorMessage={errors?.description?.message} title="توضیحات">
                    <Controller
                        name="description"
                        control={control}
                        render={({ field }) => (
                            <CustomTextArea value={field.value} placeholder="توضیحات خود را وارد کنید" className="w-full" onChange={(value) => field.onChange(value)} />
                        )}
                    />
                </FormField>
            </div>
            <div className="xl:col-span-2 mt-1">
                <CustomButton className="w-[102px]">ارسال کنید</CustomButton>
            </div>

        </form>
        <Image width={470} height={751} src="/assets/img/contact/form-bg.jpg" alt="" />
    </div>
}
