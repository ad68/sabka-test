'use client'
import React from "react";
import Tables from "./components/Tables";
import Summary from './components/Summary'
import { CustomTableProps } from "./customTable.types";
import { ConfigProvider, Pagination } from "antd";
import useCustomTable from "./hooks/useCustomTable";
function Index({ content, config }: CustomTableProps) {
  const { data, allResponse, loading, total, getList, currentPage, setCurrentPage, checkboxHandleChange, selectedItem } = useCustomTable({ api: config.apiUrl.fetch, reload: config.reload, queries: content.queries, pageSize: config.pageSize, listResponseObjectName: config.listResponseObjectName, summary: config.summary })
  return (
    <section className="min-h-[443px] justify-center items-center">
      <div className="flex justify-center items-center flex-col">
        {config?.summary?.position === "top" && <Summary cols={config?.summary?.content} data={allResponse} />}
        <section className="w-full">
          <Tables currentPage={currentPage} checkboxHandleChange={checkboxHandleChange} selectedItem={selectedItem} total={total} loading={loading} apiDel={config.apiUrl.delete} data={data} cols={content.cols} getList={() => getList(currentPage)} actions={config.actions} headerActions={config.headerActions} bulkActions={config.bulkActions} />
        </section>
        {config?.summary?.position === "bottom" && <Summary cols={config?.summary?.content} data={allResponse} />}

        {data?.length > 0 && (
          <div className="w-full flex justify-between items-center">

            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#2ebf70",
                },
              }}
            >
              <Pagination className="ltr sans mt-5 text-center border-red" defaultCurrent={1} showSizeChanger={false} current={currentPage} pageSize={config.pageSize} onChange={(value) => setCurrentPage(value)} total={total} rootClassName="dark:text-white border-red" />
            </ConfigProvider>
            <div className="text-sm pl-2">تعداد کل  : <span className="font-bold">{total} مورد</span></div>
          </div>
        )}
      </div>



    </section>
  );
}
export default React.memo(Index);
