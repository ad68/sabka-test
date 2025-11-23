"use client"
import { useAxiosWithToken } from "@/hooks";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react"

export default function Index() {

    const params = useParams();
    const router = useRouter()
    useEffect(() => {

        useAxiosWithToken.get("/article/search-post-with-shortCode/" + params.shortCode).then((res) => {
            console.log('res', res.data.split("-"))
            const id = res.data.split("-")[0];
            const title = res.data.split("-")[1];
            router.push(`/news/${id}/${title}`);

        })
    }, [])
    return <></>
}
