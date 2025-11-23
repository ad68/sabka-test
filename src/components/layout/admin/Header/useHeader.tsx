import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
const pages = [
    { url: "/user/dashboard", title: "داشبورد" },
    { url: "/admin/home-slider", title: "صفحه نخست - اسلایدر اصلی" },
    { url: "/admin/media/film-gallery", title: "فیلم - گالری" },
    { url: "/admin/media/picture-gallery", title: "تصاویر - گالری" },
    { url: "/admin/media/picture-promotional", title: "رسانه ترویجی - تصاویر" },
    { url: "/admin/media/film-promotional", title: "رسانه ترویجی - فیلم" },
    { url: "/admin/media/file-promotional", title: "رسانه ترویجی - فایل" },
    { url: "/admin/post", title: "اخبار" },
    { url: "/admin/publication", title: "نشریات" },
    { url: "/admin/notice", title: "اطلاعیه" },
    { url: "/admin/article", title: "آیین نامه و دستورالعمل" },
    { url: "/admin/media/financial-info", title: "اطلاعات و صورت‌های مالی" },
    { url: "/admin/law-transparency/managers-info", title: "اطلاعات مدیران" },
    { url: "/admin/law-transparency/final-judgement", title: "آرای قطعی مراجع قضایی" },
    { url: "/admin/law-transparency/contracts", title: "قراردادها" },
    { url: "/admin/law-transparency/province-company", title: "شرکت‌های هر استان" },
    { url: "/admin/publish-post", title: "تایید انتشار اخبار" },
]
const useHeader = () => {
    const pathname = usePathname()
    const [pageTitle, setPageTitle] = useState<string | undefined>("")
    useEffect(() => {
        setPageTitle(pages.find(el => el.url === pathname)?.title)
        console.log(pathname)
    }, [pathname])
    return {
        pageTitle,

    }
}
export default useHeader