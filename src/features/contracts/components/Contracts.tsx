'use client'
import { gregorianToJalali, numberWithCommas } from "@/utils"
import useContracts from "../hooks/useContracts"

export default function Index() {
    const { data, isFetching } = useContracts()
    return <section className='max-w-6xl m-auto mb-5 '>
        <h1 className="font-bold text-center text-xl text-primary mt-5"> فهرست قراردادهای منعقده  صندوق بیمه کشاورزی  </h1>
        <div className="flex justify-center">
            {isFetching && <div className="newsLoader"></div>}
        </div>
        {!isFetching && <table className="min-w-full text-sm text-right mt-5">
            <thead className="bg-gray-100 sticky top-0 text-center">
                <tr>
                    <th className="px-3 py-2 font-medium border">ردیف</th>
                    <th className="px-3 py-2 font-medium border">نوع معامله</th>
                    <th className="px-3 py-2 font-medium border">تاریخ برگزاری</th>
                    <th className="px-3 py-2 font-medium border">روش انجام کار</th>
                    <th className="px-3 py-2 font-medium border"> مبلغ برآوردی (ریال)</th>
                    <th className="px-3 py-2 font-medium border">نتیجه </th>
                    <th className="px-3 py-2 font-medium border">
                        نام طرف قرارداد
                    </th>
                    <th className="px-3 py-2 font-medium row-span-2 border" rowSpan={2}>
                        مبلغ قرارداد (ریال)
                    </th>
                </tr>

            </thead>
            <tbody className="divide-y">
                {data?.elements?.map((row: any, index: number) => (
                    <tr key={row.id} className={index % 2 === 0 ? 'bg-white  text-center' : 'bg-gray-50 text-center'}>
                        <td className="px-3 py-2">{index + 1}</td>
                        <td className="px-3 py-2">{row.dealType === "BID" ? "مزایده" : row.dealType === "TENDER" ? "مناقصه" : ""}</td>
                        <td className="px-3 py-2">{row.dateOfHolding && gregorianToJalali(row.dateOfHolding)}</td>
                        <td className="px-3 py-2">{row.other}</td>
                        <td className="px-3 py-2">{numberWithCommas(row.estimatedAmount)}</td>
                        <td className="px-3 py-2">{row.resultDealType === "ACCEPT" ? "قبول" : row.resultDealType === "FINISHED" ? "اتمام قرارداد" : ""}</td>
                        <td className="px-3 py-2">{row.contractingParty}</td>
                        <td className="px-3 py-2">{numberWithCommas(row.totalAmountContract)}</td>

                    </tr>
                ))}
            </tbody>

        </table>}

    </section>
}
