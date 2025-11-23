import Image from "next/image"
import useAddSliderItemForm from "../../hooks/useAddSliderItemForm"
import CustomCheckbox from "@/components/kit/CustomCheckbox"
import CustomButton from "@/components/kit/CustomButton"

export default function Index({ sortedIdsList, setSortedIdsList, onClose }: any) {
    const { data, checkboxHandelChange, currentSortedList, changeSortedIdsList, isFetching } = useAddSliderItemForm({ sortedIdsList, setSortedIdsList, onClose })
    return <section>
        {isFetching && <div className="flex justify-center">
            <div className="newsLoader"></div>
        </div>}
        {!isFetching && data && <div className="grid grid-cols-3 flex-col justify-center gap-2">

            {data?.elements?.map((item: any, index: number) => (<div key={index} className="flex gap-2 items-center">
                <CustomCheckbox checked={currentSortedList?.some((el: any) => el.id === item.id)} onChange={(value) => checkboxHandelChange(value, item)} />
                <div className="w-[180px] flex justify-center items-center border py-2 rounded-md">
                    <Image src={item.sliderFileUrl} width={300} height={300} className="h-[80px] max-w-[200px] w-auto rounded-md" alt="" />
                </div>
                <div className="">{item.persianTitle}</div>
            </div>))}
        </div>}

        <div className="flex justify-end mt-8">
            <CustomButton onClick={() => changeSortedIdsList()}>تایید</CustomButton>
        </div>

    </section>
}
