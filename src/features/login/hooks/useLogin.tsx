'use client'
import { useState } from 'react'
import { loginMode } from '../types'
import { useAxios } from '@/hooks'
import { MOBILE } from '@/constants/regex';
import { toastError } from '@/components/kit/toast';
const useLogin = () => {
    const [loginMode, setLoginMode] = useState<loginMode>("requestActiveCode")
    const [mobileNumber, setMobileNumber] = useState<string>("")
    const [actionLoading, setActionLoading] = useState(false)
    const requestActiveCode = () => {
        const params = { mobileNumber: mobileNumber }
        if (MOBILE.test(mobileNumber)) {
            setActionLoading(true)
            useAxios.post("/notification/v1/send-otp", params).then(() => {

                setLoginMode("login")
                setActionLoading(false)
            }).catch((e) => {
                setActionLoading(false)
                if (e.status === 406) {
                    setLoginMode("login")
                }
                else {
                    toastError("خطایی رخ داده است")
                }

            })
        } else {
            toastError("موبایل را به درستی وارد کنید")
        }

    }
    const goToRequestACtiveCode = () => {
        setLoginMode("requestActiveCode")
    }
    return {
        loginMode,
        setLoginMode,
        requestActiveCode,
        setMobileNumber,
        mobileNumber,
        goToRequestACtiveCode,
        actionLoading
    }
}
export default useLogin