
import { useState } from "react";
import { TableBodyProps } from "../customTable.types";
import DeleteModal from "@/components/kit/DeleteModal";
import Actions from "./Actions";
import TableLoading from './TableLoading'
import HeaderActions from "./HeaderActions";
import moment from "moment-jalaali";
import { numberWithCommas } from "@/utils";
import CustomModal from "../../CustomModal";
import CustomCheckbox from "../../CustomCheckbox";

export default function Index({ cols, data, total, apiDel, getList, actions, headerActions, loading, bulkActions, checkboxHandleChange, selectedItem, currentPage }: TableBodyProps) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState<any>();
  const [isDescModalOpen, setIsDescModalOpen] = useState<boolean>(false)
  const [descValue, setDescValue] = useState<string>()
  const hideDeleteModal = () => {
    setOpenDeleteModal(false);
  };
  const showDeleteModal = () => {
    setOpenDeleteModal(true);
  };
  const renderCell = (type: string, value: any, conditions: any) => {
    if (type === "date") {
      if (value) {
        return moment(value).format("jYYYY/jMM/jDD");
      }
      else {
        return ""
      }
    }
    if (type === "description") {
      return <div onClick={() => { setDescValue(value); setIsDescModalOpen(true) }} className="truncate w-[300px] m-auto group  cursor-pointer text-blue-700">{value}</div>;

    }
    if (type === "price") {
      return numberWithCommas(value);

    }
    else if (type === "condition") {
      return conditions.find((el: any) => el.value === value)?.replacedValue;
    } else {
      return value;
    }
  };
  return (
    <>
      {(headerActions || bulkActions) && <HeaderActions actions={headerActions} bulkActions={bulkActions} selectedItem={selectedItem} />}
      <table className="rounded-xl text-sm overflow-hidden  w-full h-auto">
        <thead className="bg-slate-200 shadow-md rounded-xl h-[40px] ">
          <tr className="">
            {bulkActions && <th className={`border-[3px] w-[50px] border-white rounded-r-xl`}></th>}
            <th className={`border-[3px] w-[50px] border-white rounded-r-xl`}>ردیف</th>
            {cols?.map((item: any, index: number) => (
              <th key={index} style={{ width: item.width ? item.width : `auto` }} className={`border-[3px] border-white`}>
                {item.title}
              </th>
            ))}
            {actions && <th className="rounded-l-xl border-[3px] border-white">عملیات</th>}
          </tr>
        </thead>
        <tbody className="rounded-xl w-full relative">
          {!loading && total > 0 &&
            data.map((rowItem: any, rowIndex: number) => (
              <tr key={rowIndex} className={`${rowIndex % 2 !== 0 ? "bg-slate-100" : "bg-none"} h-[40px] rounded-xl overflow-hidden`}>
                {bulkActions && <td className="text-center cursor-pointer"><CustomCheckbox onChange={(e) => { checkboxHandleChange(e, rowItem.id) }} className="m-auto" /></td>}
                <td className="rounded-xl border-[3px] border-white text-center">{(currentPage - 1) * 10 + (rowIndex + 1)}</td>
                {cols?.map((colItem: any, colIndex: number) => (
                  <td key={colIndex} className="rounded-xl border-[3px] border-white text-center">
                    {renderCell(colItem.type, rowItem[colItem.field], colItem?.conditions)}
                  </td>
                ))}
                <Actions item1={rowItem} actions={actions} showDeleteModal={showDeleteModal} setDeleteId={setDeleteId} />
              </tr>
            ))
          }

        </tbody>
      </table>
      {
        loading && <TableLoading />
      }

      <DeleteModal open={openDeleteModal} onClose={hideDeleteModal} api={apiDel} id={deleteId} onSuccess={getList}>
        آیا مایلید رکورد مورد نظر حذف شود؟
      </DeleteModal>
      <CustomModal onClose={() => setIsDescModalOpen(false)} open={isDescModalOpen}><p className="text-justify py-2">
        {descValue}
      </p></CustomModal>
    </>
  );
}

