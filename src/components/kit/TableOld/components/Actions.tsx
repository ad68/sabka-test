import {Edit2Icon, EyeIcon, FileEdit, Trash2Icon} from "lucide-react";
import { Actions } from "../customTable.types";
import React from "react";
function Index({ actions, setDeleteId, item1, showDeleteModal }: Actions) {
  return (
    <>
      {actions && (
        <td className=" rounded-xl   gap-1 border-[3px] border-white text-center">
          <div className="flex gap-1 justify-center">
            {actions.map((item: any, index: number) => (
              <div key={index}>
                {item.type === "view" && (
                  <button
                    onClick={() => {
                      item.onClick(item1);
                    }}
                    className="w-[30px] h-[30px] flex justify-center items-center bg-green-400 hover:bg-green-500 transition-all  shadow-xl border-[2px] border-white rounded-xl text-white"
                  >
                    <EyeIcon className="w-[13px]" />
                  </button>
                )}
                {item.type === "delete" && (
                  <button
                    onClick={() => {
                      showDeleteModal();
                      setDeleteId(item1?.id);
                    }}
                    className="w-[30px] h-[30px] flex justify-center items-center bg-red-500 hover:bg-red-600 transition-all shadow-xl border-[2px] border-white rounded-xl text-white"

                  >
                    <Trash2Icon className="w-[13px]" />
                  </button>
                )}
                {item.type === "edit" && (
                  <button
                    onClick={() => {
                      item.onClick(item1);
                    }}
                    className="w-[30px] h-[30px] flex justify-center items-center bg-[#0061ff] hover:bg-[#004ecc] transition-all  shadow-xl border-[2px] border-white rounded-xl text-white"
                  >
                    <Edit2Icon className="w-[13px]" />
                  </button>
                )}
                {item.type === "condition" && item.showCondition?.(item1) && (
                    <button
                        onClick={() => {
                          item.onClick?.(item1);
                        }}
                        className="w-[30px] h-[30px] flex justify-center items-center bg-[#338888] hover:bg-[#338558] transition-all shadow-xl border-[2px] border-white rounded-xl text-white"
                    >
                      <FileEdit className="w-[13px]" />
                    </button>
                )}
              </div>
            ))}
          </div>

        </td>
      )}
    </>
  );
}
export default React.memo(Index);
