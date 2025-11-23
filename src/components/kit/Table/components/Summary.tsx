import { numberWithCommas } from "@/utils";
import { ChevronLeft } from "lucide-react";
import moment from "moment-jalaali";

export default function Index({ cols, data }: any) {
    const renderCell = (type: string, value: any) => {
        if (type === "date") {
            return moment(value).format("jYYYY/jMM/jDD");

        }
        if (type === "price") {
            return numberWithCommas(value);
        }

    };
    return <>
        <div className="bg-blue-50 mb-2 border flex gap-2 items-center px-2 rounded-lg w-full h-[50px]">
            {cols.map((item: any, index: number) => <div key={index} className="flex items-center">
                <ChevronLeft className="w-[15px]" />
                {item.title}: <div className="mr-1 font-semibold">{renderCell(item.type, data[item.filedValue])}</div>
            </div>)}
        </div>
    </>


}
