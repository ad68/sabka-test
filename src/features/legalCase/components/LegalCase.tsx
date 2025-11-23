'use client'
import { gregorianToJalali } from "@/utils"
import useFetchLegalCase from "../hooks/queries/useFetchLegalCase"

export default function Index() {
    const { data, isFetching } = useFetchLegalCase()
    return <section className='max-w-6xl m-auto mb-5 '>
        <h1 className="font-bold text-center text-xl text-primary mt-5"> اطلاعات دعاوی حقوقی قطعیت یافته صندوق بیمه کشاورزی  </h1>
        <div className="flex justify-center">
            {isFetching && <div className="newsLoader"></div>}
        </div>
        {!isFetching && <table className="min-w-full text-sm text-right mt-5">
            <thead className="bg-gray-100 sticky top-0 text-center">
                <tr>
                    <th className="px-3 py-2 font-medium border">ردیف</th>
                    <th className="px-3 py-2 font-medium border">استان</th>
                    <th className="px-3 py-2 font-medium border">موضوع</th>
                    <th className="px-3 py-2 font-medium border">شعبه رسیدگی کننده</th>
                    <th className="px-3 py-2 font-medium border">له/علیه</th>
                    <th className="px-3 py-2 font-medium border"> تاریخ قطعیت یافته </th>

                </tr>

            </thead>
            <tbody className="divide-y">
                {data?.elements?.map((row: any, index: number) => (
                    <tr key={row.id} className={index % 2 === 0 ? 'bg-white  text-center' : 'bg-gray-50 text-center'}>
                        <td className="px-3 py-2">{index + 1}</td>
                        <td className="px-3 py-2">{row.province}</td>
                        <td className="px-3 py-2">{row.title}</td>
                        <td className="px-3 py-2">{row.jurisdictionBranch}</td>
                        <td className="px-3 py-2">{row.forAgainst}</td>
                        <td className="px-3 py-2">{gregorianToJalali(row.date)}</td>


                    </tr>
                ))}
            </tbody>

        </table>}

    </section>
}
