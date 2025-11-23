'use client'
import VerifyActiveCode from './VerifyActiveCode'
import RequestActiveCode from './RequestActiveCode'
import useLogin from '../hooks/useLogin'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import rightBg from '@/assets/img/landing/third-right-bg.png'
import leftBg from '@/assets/img/landing/third-left-bg.png'
export default function Index() {
    const { loginMode, requestActiveCode, mobileNumber, setMobileNumber, goToRequestACtiveCode, actionLoading } = useLogin()
    return (<>

        <section className="h-screen w-full mt-[-82px]  flex flex-col justify-center items-center">
            <Image width={400} height={400} alt='' className=' w-[100px] xl:w-auto h-auto absolute right-0 top-[100px]' src={rightBg} />
            <Image width={400} height={400} alt='' className='w-[100px] xl:w-auto h-auto absolute left-0 top-[100px]' src={leftBg} />
            <div className="text-center text-2xl font-bold text-primary">
                ورود به پنل مدیریت
            </div>
            <section className="w-[550px] max-w-full  border-t-[4px] py-10 px-10 border-b-[2px] border-t-primary border-b-secondary rounded-[10px] mt-4 bg-white">
                <Link href="/">
                    <Image width={100} height={100} className="w-[100px] m-auto" src="/assets/img/sandoogh-logo.png" alt="logo" />
                </Link>
                {loginMode === "requestActiveCode" && <RequestActiveCode actionLoading={actionLoading} requestActiveCode={requestActiveCode} mobileNumber={mobileNumber} setMobileNumber={setMobileNumber} />}
                {loginMode === "login" && <VerifyActiveCode goToRequestACtiveCode={goToRequestACtiveCode} mobileNumber={mobileNumber} requestActiveCode={requestActiveCode} />}
                <div className="text-center  mt-5 font-bold  text-primary">
                    <Link href="/" className="flex justify-center items-center">
                        بازگشت به سایت
                        <ArrowLeft />
                    </Link>

                </div>
            </section>
        </section>
    </>
    )
}



