'use client'
import OtpInputs from "@/components/kit/OtpInputs";
import CountDown from './components/CountDown'
import useVerifyActiveCode from "../../hooks/useVerifyActiveCode";
import CustomButton from "@/components/kit/CustomButton";
import { ArrowBigLeft } from "lucide-react";
export default function Index({ requestActiveCode, mobileNumber, goToRequestACtiveCode }: any) {
    const { activeCode, setActiveCode, login, resendBtnState, setResendBtnState, reloadTimer, actionLoading } = useVerifyActiveCode(requestActiveCode, mobileNumber)
    return <>
        <div className="flex justify-between">
            <h1 className="text-primary font-bold">کد فعالسازی را وارد کنید</h1>
            <button onClick={goToRequestACtiveCode} className="text-primary font-bold flex">
                بازگشت
                <ArrowBigLeft />
            </button>
        </div>
        <div className="mt-[50px]">
            <OtpInputs activeCode={activeCode} setActiveCode={setActiveCode} login={login} />
            {
                !resendBtnState && <CountDown totalCount={180} reload={true} resendBtnState={false} setResendBtnState={setResendBtnState} />
            }
            {resendBtnState && <section className="flex justify-center items-center relative pt-[5px]">
                <button onClick={reloadTimer} className="disabled:text-slate-300 text-[14px] gap-[8px] text-secondary flex items-center font-medium bg-transparent transition-all duration-400 mt-4" >
                    <div className="mt-[2px]">درخواست مجدد کد فعالسازی</div>
                </button>
                {/*  {loginLoading && <section className="resendCode_Loader"></section>} */}
            </section>}
            <CustomButton onClick={login} loading={actionLoading} className="w-full mt-5">ورود</CustomButton>
        </div>
    </>
}
