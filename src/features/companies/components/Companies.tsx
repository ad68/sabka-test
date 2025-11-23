'use client'
import useCompanies from "../hooks/useCompanies";

export default function Index() {
  const { data, provinceName } = useCompanies()

  return <section className="max-w-6xl m-auto mt-10 mb-10">
    <div className="text-lg text-center">
      <p className="font-bold">{provinceName}</p>

    </div>
    <table className="min-w-full text-sm text-right">
      <thead className="bg-gray-100 sticky top-0">
        <tr>
          <th className="px-3 py-2 font-medium">ردیف</th>
          <th className="px-3 py-2 font-medium">نام شرکت</th>
          <th className="px-3 py-2 font-medium">نام</th>
          <th className="px-3 py-2 font-medium">کد نمایندگی</th>
          <th className="px-3 py-2 font-medium">آدرس</th>
          <th className="px-3 py-2 font-medium">نوع فعالیت</th>
          <th className="px-3 py-2 font-medium">تلفن مستقیم</th>
        </tr>
      </thead>
      <tbody className="divide-y">
        {data?.elements?.map((row: any, index: number) => (
          <tr key={row.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            <td className="px-3 py-2">{row.id}</td>
            <td className="px-3 py-2">{row.companyName}</td>
            <td className="px-3 py-2">{row.name}</td>
            <td className="px-3 py-2">{row.code}</td>
            <td className="px-3 py-2">{row.address}</td>
            <td className="px-3 py-2">{row.activities}</td>
            <td className="px-3 py-2">{row.phoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>

}