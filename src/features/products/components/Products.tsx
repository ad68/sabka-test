'use client'

import useProducts from "../hooks/useProducts";
import { Product } from "../types";

export default function Index() {
    const { isFetching, data } = useProducts()
    return <>
        <h2>{isFetching ? "در حال بارگذاری" : ""}</h2>
        <section>
            {data?.map((item: Product, index: number) => (
                <section key={index}>{item.productName}</section>
            ))}

        </section>
    </>;
}
