'use client'
import CustomSortableList from "@/components/kit/CustomSortableList"
import useHomeSliderSort from "../hooks/useHomeSliderSort"
import { GripHorizontal, Plus, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import CustomButton from "@/components/kit/CustomButton"

import Link from "next/link"
import CustomModal from "@/components/kit/CustomModal"
import AddSliderItemForm from './AddSliderItemForm'
export default function Index() {
    const { isAddModalOpen, setIsAddModalOpen, isFetching, setDraggingId, sortedIdsList, setSortedIdsList, draggingId, applyPending, saveSortOrder, deleteSliderItem } = useHomeSliderSort()
    return <>

        <section className="flex flex-col gap-3">
            <div className="flex justify-between">
                <div className=" gap-2 flex ">
                    <strong>توجه:</strong>
                    <p className="text-rose-600"> با کشیدن و رها کردن کارت ها به بالا و پایین میتوانید ترتیب قرار گرفتن عکس ها در اسلایدر را رو تغییر دهید</p>
                </div>
                <CustomButton onClick={() => setIsAddModalOpen(true)} color="secondary" icon={<Plus />} className="w-[180px]">
                    افزودن تصویر
                </CustomButton>
            </div>
            {isFetching && <div className="flex justify-center py-2"> <div className="newsLoader"></div></div>}
            {!isFetching && sortedIdsList.length === 0 && <div className="flex justify-center items-center py-7 bg-slate-100 text-slate-600 rounded-md text-[25px] border">هیچ تصویری وجود ندارد</div>}
            {!isFetching && <CustomSortableList
                setDraggingId={setDraggingId}
                sortedIdsList={sortedIdsList}
                setSortedIdsList={setSortedIdsList}
            >
                {sortedIdsList?.map((item: any, index: number) => (<div key={index} className={cn(draggingId === item.id ? "bg-slate-300" : "bg-white", `border flex gap-2 mt-2 justify-between items-center px-10 rounded-2xl shadow-xl h-[110px] cursor-pointer`)}>
                    <div className="flex gap-4 items-center">
                        <GripHorizontal className="text-slate-500" />
                        <div className="w-[30px] flex justify-center items-center">{index + 1}</div>
                        <Image width={800} height={800} className="h-[80px] w-auto rounded-md" src={item.sliderFileUrl} alt="" />
                        <div className=" flex justify-center items-center">{item.persianTitle}</div>
                    </div>
                    <div>
                        <button onClick={() => { deleteSliderItem(item.id) }} className="flex justify-center items-center w-[40px] h-[40px] bg-slate-100 hover:bg-red-100 border border-red-200 transition-all rounded-full">
                            <Trash2 className="text-red-600" />
                        </button>
                    </div>
                </div>))}
            </CustomSortableList>}
            <div className="flex gap-2 justify-end">
                <Link href="/admin/home-slider">
                    <CustomButton variant="outlined" color="default" className="w-[150px] mt-2">بازگشت</CustomButton>
                </Link>
                <CustomButton onClick={saveSortOrder} loading={applyPending} className="w-[150px] mt-2">ذخیره تغییرات</CustomButton>
            </div>
        </section>
        <CustomModal width={1000} open={isAddModalOpen} onClose={() => setIsAddModalOpen(false)}>
            <AddSliderItemForm sortedIdsList={sortedIdsList} setSortedIdsList={setSortedIdsList} onClose={() => setIsAddModalOpen(false)} />
        </CustomModal>
    </>
}
