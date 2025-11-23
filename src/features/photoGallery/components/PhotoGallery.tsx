'use client'
import { gregorianToJalali } from '@/utils'
import usePhotoGallery from '../hooks/usePhotoGallery'
import Item from './PhotoGalleryItem'
import { ConfigProvider, Pagination } from 'antd'
export default function Index() {
    const { data, isFetching, currentPage, setCurrentPage, total } = usePhotoGallery()
    return <section className="w-[1140px] mb-20 h-auto relative  m-auto px-[20px] xl:px-0 rounded-xl mt-10 min-h-10 max-w-full">
        <h1 className="text-primary text-[32px] font-bold">آلبوم تصاویر</h1>
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
                    <section className="grid grid-cols-1 gap-3 xl:grid-cols-3 mt-[26px]">
                        {data?.elements.map((item: any, index: number) => (<Item key={index} date={gregorianToJalali(item.createdOn)} href={`/photos/${item.id}/${item.persianTitle}`} imageSrc={item.fileUrl} title={item.persianTitle} />
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
}
