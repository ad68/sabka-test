'use client'
import { toastError } from "@/components/kit/toast";
import { useAxios } from "@/hooks";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
const useVerifyActiveCode = (requestActiveCode: any, mobileNumber: string) => {
    const router = useRouter()
    const { login: authLogin } = useAuthStore()
    const [resendBtnState, setResendBtnState] = useState(false);
    const [reloadTimerState, setReloadTimerState] = useState(false);
    const [actionLoading, setActionLoading] = useState(false);
    const [activeCode, setActiveCode] = useState("")
    const login = () => {
        setActionLoading(true)
        const params = { mobileNumber: mobileNumber, code: activeCode }
        useAxios.post("/sso/v1/login-or-signup", params).then(res => {
            authLogin("Bearer " + res.data.token)
            router.push("/admin/article")

        }).catch(() => {
            setActionLoading(false)

            toastError("خطایی رخ داده است")
        })
    }
    const reloadTimer = () => {
        setResendBtnState(false);
        setReloadTimerState(!reloadTimer);
        requestActiveCode()
    };
    return {
        resendBtnState,
        setResendBtnState,
        setReloadTimerState,
        actionLoading,
        setActionLoading,
        activeCode,
        setActiveCode,
        login,
        reloadTimerState,
        reloadTimer
    }
}
export default useVerifyActiveCode