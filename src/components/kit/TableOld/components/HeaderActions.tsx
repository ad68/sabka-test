import { Plus } from "lucide-react";
import CustomButton from "../../CustomButton";
import { HeaderActionProp, TableHeaderActions } from "../customTable.types";
import React from "react";

export default function Index({ actions }: HeaderActionProp) {
    return <header className=" flex justify-between mb-3 rounded-md">
        {actions.map((item: TableHeaderActions, index: number) => (<React.Fragment key={index}>
            <div></div>
            {item.type === "add" && <CustomButton color="secondary" onClick={item.onClick} className="w-[140px]" size="normal" icon={<Plus />} >افزودن</CustomButton>}
        </React.Fragment>))}
    </header>
}
