
"use client"
import ListGallery from "@/components/kit/ListGallery"
import usePromotionalGallery from "../../hooks/usePromotionalGallery"

export default function Index() {
    const { data } = usePromotionalGallery()

    return <section className="max-w-6xl mt-[40px] m-auto p-2 mb-[40px]">
        <h1 className="text-primary text-[25px] font-bold"> رسانه ترویجی</h1>
        {data && <ListGallery listMode={true} slides={data?.elements.map((item: any) => ({ imageUrl: item.fileUrl }))} />}

    </section>
}
