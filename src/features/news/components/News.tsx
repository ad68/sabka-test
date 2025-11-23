'use client'
import Image from "next/image";
import Leaf from '@/assets/img/contactUs/leaf.png'
import Link from "next/link";
import { Calendar1Icon, EyeIcon, TimerIcon } from "lucide-react";
import useNews from "../hooks/useNews";
import { dateToTime, gregorianToJalali } from "@/utils";
import { ConfigProvider, Pagination } from "antd";

export default function Index() {
    const { data, setCurrentPage, currentPage, total, isFetching } = useNews()
    return <section className="w-[1140px] mb-20 h-auto relative  m-auto px-[20px] xl:px-0 rounded-xl mt-10 min-h-10 max-w-full">
        <h1 className="text-primary text-[32px] font-bold">آخرین اخبار</h1>
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#2ebf70",
                },
            }}
        >
            <Pagination className="ltr sans mt-5 text-center border-red" defaultCurrent={1} showSizeChanger={false} current={currentPage} pageSize={10} onChange={(value) => setCurrentPage(value)} total={total} rootClassName="dark:text-white border-red" />
        </ConfigProvider>

        <section className="max-w-6xl m-auto flex flex-col items-center p-2 mb-[40px]">
            {isFetching && <div className="newsLoader"></div>}
            {!isFetching &&
                <>
                    {data?.elements.map((item: any, index: number) => (
                        <Link href={`/news/${item.id}/${decodeURIComponent(item.persianTitle2)}`} key={index} className="bg-white relative  text-[#284D2C] hover:shadow-xl transition-all duration-300 rounded-[10px] block  mt-[26px] px-[20px] py-[18px] w-full">
                            <div className="flex flex-col xl:flex-row gap-4 items-center">
                                {/*   <div className="w-[150px] h-[150px] border flex justify-center items-center rounded-md font-bold">بدون عکس</div> */}
                                <Image src={item.fileUrl} className="float-left rounded-md xl:w-[150px] h-auto" width={400} height={300} alt="" />
                                <div>
                                    <p className="text-[14px]">{item.persianTitle1}</p>
                                    <p className="text-[24px] font-semibold"> {item.persianTitle2}</p>
                                </div>
                            </div>
                            <footer className="mt-[18px]">
                                <div className="text-[12px] flex gap-3 justify-end">
                                    <div className="flex items-center gap-1">
                                        <Calendar1Icon className="w-[16px] text-secondary" />
                                        <span>تاریخ : {gregorianToJalali(item?.createdOn)}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <TimerIcon className="w-[16px] text-secondary" />
                                        <span>{dateToTime(item?.createdOn)}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <EyeIcon className="w-[16px] text-secondary" />
                                        <span>تعداد بازدید : {item.visitNumber}</span>
                                    </div>
                                </div>
                            </footer>
                            <Image className="absolute top-[-10px] left-[10px] w-[27px] h-[22px]" src={Leaf} alt="" />
                        </Link>
                    ))}
                </>
            }
        </section>
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#2ebf70",
                },
            }}
        >
            <Pagination className="ltr sans mt-5 text-center border-red" defaultCurrent={1} showSizeChanger={false} current={currentPage} pageSize={10} onChange={(value) => setCurrentPage(value)} total={total} rootClassName="dark:text-white border-red" />
        </ConfigProvider>
    </section>
}
