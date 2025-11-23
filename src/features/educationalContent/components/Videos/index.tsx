'use client'
import CustomModal from "@/components/kit/CustomModal";
import CustomVideoPlayer from "@/components/kit/CustomVideoPlayer";
import ListItem from './ListItem'

import { ConfigProvider, Pagination } from "antd";
import { gregorianToJalaliDateTime } from "@/utils";
import usePromotionalVideos from "../../hooks/usePromotionalVideos";

export default function Index() {
    const { currentVideo, openPlayer, playVideo, setOpenPlayer, isFetching, data, total, currentPage, setCurrentPage } = usePromotionalVideos()
    return <>

        <section className="w-[1140px] mb-20 h-auto relative  m-auto px-[20px] xl:px-0 rounded-xl mt-10 min-h-10 max-w-full">
            <h1 className="text-primary text-[25px] font-bold"> ویدئوها</h1>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#2ebf70",
                    },
                }}
            >
                <Pagination className="ltr sans mt-5 text-center border-red" defaultCurrent={1} showSizeChanger={false} current={currentPage} pageSize={10} onChange={(value) => setCurrentPage(value)} total={total} rootClassName="dark:text-white border-red" />
            </ConfigProvider>
            <section className="max-w-6xl m-auto flex flex-col items-center p-2 mb-[40px]">
                {isFetching && <div className="newsLoader"></div>}
                {!isFetching &&
                    <>
                        <section className="w-full grid grid-cols-1 gap-3 xl:grid-cols-3 mt-[26px]">
                            {data?.elements.map((item: any, index: number) => (
                                <ListItem key={index} date={gregorianToJalaliDateTime(item.createdOn)} playVideo={playVideo} videoSrc={item.fileUrl} thumbSrc="/videos/thumb1.png" title={item.persianTitle ? item.persianTitle : item.originalFilename} />
                            ))}
                        </section>
                    </>
                }
            </section>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#2ebf70",
                    },
                }}
            >
                <Pagination className="ltr sans mt-5 text-center border-red" defaultCurrent={1} showSizeChanger={false} current={currentPage} pageSize={10} onChange={(value) => setCurrentPage(value)} total={total} rootClassName="dark:text-white border-red" />
            </ConfigProvider>
        </section>
        <CustomModal width={1000} open={openPlayer} onClose={() => setOpenPlayer(false)}>
            <div className="w-full flex justify-center items-center">
                <CustomVideoPlayer url={currentVideo} />
            </div>
        </CustomModal>
    </>
}
