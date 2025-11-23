'use client'
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
const useNewsDetail = () => {
    const [currentUrl, setCurrentUrl] = useState<string>()
    const [text, setText] = useState<string>()
    const pathName = usePathname()
    const sharePage = () => {
        if (typeof window === "undefined") return null;
        setCurrentUrl(encodeURIComponent(window.location.href))
        setText(encodeURIComponent(document.title))
    }
    useEffect(() => {
        sharePage()
    }, [])
    const handlePrint = () => {
        window.print();
    };
    const generateSlides = (slides: any) => {
        return slides
            .filter((item: any) => item.documentType === "PICTURE")
            .map((item: any) => ({ imageUrl: item.fileUrl }));
    }
    useEffect(() => {
        console.log("pathName", pathName)
    }, [pathName])
    return {
        handlePrint,
        currentUrl,
        text,
        pathName,
        generateSlides
    }

}
export default useNewsDetail