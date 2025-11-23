import Tables from "./components/Tables";
import { CustomTableProps } from "./customTable.types";
import { ConfigProvider, Pagination } from "antd";
import useCustomTable from "./hooks/useCustomTable";
import React from "react";
function Index({ content, config }: CustomTableProps) {
  const { data, loading, total, getList, currentPage, setCurrentPage } = useCustomTable({ api: config.apiUrl.fetch, reload: config.reload, queries: content.queries, pageSize: config.pageSize, listResponseObjectName: config.listResponseObjectName })
  return (
    <section className="min-h-[443px] justify-center items-center">
      <div className="flex justify-center items-center flex-col">
        <section className="w-full">
          <Tables total={total} loading={loading} apiDel={config.apiUrl.delete} data={data} cols={content.cols} getList={() => getList(currentPage)} actions={config.actions} headerActions={config.headerActions} />
        </section>
        {data?.length > 0 && (
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#2ebf70",
              },
            }}
          >
            <Pagination className="ltr sans mt-5 text-center border-red" defaultCurrent={1} showSizeChanger={false} current={currentPage} pageSize={config.pageSize} onChange={(value) => setCurrentPage(value)} total={total} rootClassName="dark:text-white border-red" />
          </ConfigProvider>
        )}
      </div>

    </section>
  );
}
export default React.memo(Index);
