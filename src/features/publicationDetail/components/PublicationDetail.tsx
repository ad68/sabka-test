'use client'
import { ChevronLeft, DownloadCloudIcon, File, PrinterIcon } from "lucide-react"
import Image from "next/image"
import Leaf from '@/assets/img/contactUs/leaf.png'
import { PdfIcon } from "@/assets/icons/PdfIcon";
import usePublicationDetail from "../hooks/usePublicationDetail";
import { PublicationDetail } from "../types";
import { dateToTime, gregorianToJalali } from "@/utils";


export default function Index({ data }: { data: PublicationDetail }) {
    const { handlePrint } = usePublicationDetail()

    return (
        <section className="xl:w-[1140px]  m-auto  mt-10 mb-10 px-[20px] xl:px-0 max-w-full">
            <div className="w-full rounded-xl overflow-hidden xl:h-[60px] bg-primary p-4 xl:p-0 ">
                <div className="w-full h-full px-[81px] z-30 relative flex flex-col xl:flex-row  justify-between items-center">
                    <span className="text-white text-lg font-medium">تاريخ :{gregorianToJalali(data.createdOn)}</span>
                    <span className="text-white text-lg font-medium">ساعت : {dateToTime(data.createdOn)}</span>
                    <span className="text-white text-lg font-medium">تعداد بازدید :{data.visitNumber}</span>
                    <div className="flex justify-between items-center text-white gap-[20px]">
                        <button onClick={handlePrint} className="w-[40px] h-[40px] flex justify-center items-center rounded-full transition-all hover:bg-[#ffffff47]">
                            <PrinterIcon className="cursor-pointer w-[28px]" />

                        </button>
                        {/*  <button className="w-[40px] h-[40px] flex justify-center items-center rounded-full  transition-all hover:bg-[#ffffff47]">
                            <PdfIcon className="cursor-pointer w-[28px]" />
                        </button> */}
                    </div>
                </div>
            </div>
            <article className="mt-[37px] flex flex-col xl:flex-row items-start  justify-between w-full">
                <div className="bg-white order-2 mt-10 xl:mt-0 xl:order-1 pb-10  xl:grow-[1.5] relative text-[#284D2C] rounded-[10px] p-4">
                    <Image className="absolute bottom-0 left-[20px] w-[27px] h-[22px]" src={Leaf} alt="" />
                    <div className="flex flex-col gap-3">
                        <h2 className="flex items-center  font-semibold xl:text-lg  xl:px-0">
                            <ChevronLeft size={20} />
                            {data?.persianTitle1}
                        </h2>
                        <div className="flex items-center">
                            <ChevronLeft size={20} />
                            <div className="flex gap-[2px]">
                                <span className="font-semibold">نشریه: </span>
                                <span className="font-bold">{data?.persianPublicationName}</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <ChevronLeft size={20} />
                            <div className="flex gap-[2px]">
                                <span className="font-semibold">سال انتشار:</span>
                                <span className="font-bold">{data?.yearPublish}</span>
                            </div>
                        </div>

                    </div>
                    {data.documentFiles.length > 0 && <h3>
                        <a href={data.documentFiles[0].fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"

                            className="flex justify-start pr-5 items-center relative  overflow-hidden gap-2 w-[250px] bg-[#07971513] hover:bg-[#0797152f] transition-all rounded-lg p-2  mt-2 pt-2"
                        >
                            <DownloadCloudIcon className="w-[30px] text-primary" />
                            <span>دانلود فایل الحاقی</span>
                            <div className="h-[60px] w-[60px] absolute flex justify-center items-center left-[-5px] bg-[#02240513] rounded-full">{data.documentFiles[0].fileUrl.split(".")[3] === "pdf" ? <PdfIcon className="text-red-500 w-[25px]" /> : <File className="text-slate-500" />}</div>
                            {/* <PdfIcon className="text-red-500 w-[20px]" /> */}
                        </a>
                    </h3>}
                </div>
                <Image src={data.fileUrl} className="w-full order-1 xl:w-[400px] flex-1 xl:mr-10 rounded-lg  h-auto" width={400} height={300} alt="" />
            </article>


        </section>
    )
}
