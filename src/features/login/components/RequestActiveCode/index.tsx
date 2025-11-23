import CustomButton from "@/components/kit/CustomButton";
import CustomInputNumber from "@/components/kit/CustomInputNumber";
export default function Index({ mobileNumber, setMobileNumber, requestActiveCode, actionLoading }: any) {
    return <>
        <div className="mt-[10px]">
            <div className="text-sm font-medium">شماره موبایل</div>
            <CustomInputNumber maxLength={11} onKeyUp={(e) => e.key === "Enter" && requestActiveCode()} className="mt-[6px] h-[60px]" placeholder="شماره موبایل خود را وارد کنید" value={mobileNumber} onChange={setMobileNumber} />
            <CustomButton size="normal" loading={actionLoading} onClick={requestActiveCode} className="w-full mt-5">درخواست کد فعالسازی</CustomButton>
        </div>
    </>
}
