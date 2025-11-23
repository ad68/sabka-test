import { BookCheck, Plus } from "lucide-react";
import CustomButton from "../../CustomButton";
import { HeaderActionProp, TableHeaderActions, TableHeaderBulkActions } from "../customTable.types";
import React from "react";

export default function Index({ actions, bulkActions, selectedItem }: HeaderActionProp) {
    return <header className=" flex justify-between mb-3 rounded-md">
        <div>
            {bulkActions &&
                bulkActions?.map((item: TableHeaderBulkActions, index: number) => (<React.Fragment key={index}>
                    {item.type === "publish" && <CustomButton disabled={selectedItem.length === 0} color="default" onClick={() => item?.onClick(selectedItem)} className="w-[140px]" size="normal" icon={<BookCheck />} >انتشار</CustomButton>}
                </React.Fragment>))
            }

        </div>
        <div className="flex items-center gap-2">
            {actions &&
                actions.map((item: TableHeaderActions, index: number) => (<React.Fragment key={index}>
                    {item.type === "add" && <CustomButton color="secondary" onClick={item.onClick} className="w-[140px]" size="normal" icon={<Plus />} >افزودن</CustomButton>}
                    {item.type === "other" && <CustomButton color="default" onClick={item.onClick} className="w-[140px]" size="normal">{item.title}</CustomButton>}
                </React.Fragment>))
            }

        </div>


    </header>
}
