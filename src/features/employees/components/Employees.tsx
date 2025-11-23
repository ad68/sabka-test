'use client'


import useEmployees from "../hooks/useEmployees"

export default function Index() {
    const { data, isFetching } = useEmployees()
    return <section className='max-w-6xl m-auto mb-5 my-10'>
        <div className="text-lg text-center">
            <p className="font-bold">میزان دریافتی ماهانه و سالانه:</p>
            <p className="text-[16px]">
                براساس ماده 27 قانون اساسنامه صندوق بیمه کشاورزی ، صندوق درخصوص مباحث اداری و استخدامی تابع قوانین و مقررات بانک کشاورزی است
                و انتشار آن  برعهده  بانک قرار دارد.
            </p>
        </div>
        <div className="flex justify-center">
            {isFetching && <div className="newsLoader"></div>}
        </div>
        {!isFetching && <table className="min-w-full text-sm text-right mt-5">
            <thead className="bg-gray-100 sticky top-0 text-center">
                <tr>
                    <th className="px-3 py-2 font-medium border">ردیف</th>
                    <th className="px-3 py-2 font-medium border">نام</th>
                    <th className="px-3 py-2 font-medium border">نام خانوادگی</th>
                    <th className="px-3 py-2 font-medium border">مدرک تحصیلی</th>
                    <th className="px-3 py-2 font-medium border">سابقه کار</th>
                    <th className="px-3 py-2 font-medium border">نحوه به کارگیری</th>
                    <th className="px-3 py-2 font-medium border">فرآیند اداری</th>
                </tr>

            </thead>
            <tbody className="divide-y">
                {data?.elements?.map((row: any, index: number) => (
                    <tr key={row.id} className={index % 2 === 0 ? 'bg-white  text-center' : 'bg-gray-50 text-center'}>
                        <td className="px-3 py-2">{index + 1}</td>
                        <td className="px-3 py-2">{row.firstName}</td>
                        <td className="px-3 py-2">{row.lastName}</td>
                        <td className="px-3 py-2">{row.educational}</td>
                        <td className="px-3 py-2">{row.jobExperience}</td>
                        <td className="px-3 py-2">{row.methodOfEmployment}</td>
                        <td className="px-3 py-2">{row.administrativeProcess}</td>


                    </tr>
                ))}
            </tbody>

        </table>}

    </section>
}
