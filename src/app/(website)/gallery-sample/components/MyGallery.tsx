'use client'

import CustomGallery from "@/components/kit/CustomGallery"

export default function Index() {
    const images = [
        { imageUrl: "/assets/img/news/news1.jpg", title: "" },
        /*  { imageUrl: "/assets/img/news/news2.jpg", title: "" },
         { imageUrl: "/assets/img/news/news3.jpg", title: "" },
         { imageUrl: "/assets/img/news/news4.jpg", title: "" },
         { imageUrl: "/assets/img/news/news5.jpg", title: "" },
         { imageUrl: "/assets/img/news/news6.jpg", title: "" }, */

    ]
    return <section className="xl:w-[400px]">
        <CustomGallery slides={images} />
    </section>
}
