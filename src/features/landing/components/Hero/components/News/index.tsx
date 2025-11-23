'use client'
import { news } from '@/constants/global'
import NewsItem from './components/NewsItem'
import Link from 'next/link'
import { useState } from 'react'


export default function Index() {
    const [activeTab, setActiveTab] = useState(0)
    return <section className="w-[600px] h-[500px] flex flex-col gap-[20px]">
        <div className='flex justify-between'>
            <div className='flex gap-[5px]'>
                <button onClick={() => setActiveTab(0)} className={`${activeTab == 0 ? `bg-primary text-white` : `text-primary`} text-sm px-[10px]  p-2 rounded-md`}>یادداشت ویژه</button>
                <button onClick={() => setActiveTab(1)} className={`${activeTab == 1 ? `bg-primary text-white` : `text-primary`} text-sm px-[10px]  p-2 rounded-md`}>منتخب استان ها</button>
                <button onClick={() => setActiveTab(2)} className={`${activeTab == 2 ? `bg-primary text-white` : `text-primary`} text-sm px-[10px]  p-2 rounded-md`}>دیگر رسانه ها</button>
            </div>
            <Link href="/news">
                <button className=' bg-primary text-white text-sm p-2 px-[20px] rounded-md'>آرشیو</button>
            </Link>

        </div>
        <div className='overflow-y-scroll  my-scroll-box'>
            {news.map((item, index) => (<NewsItem key={index} id={item.id} title={item.title} date={item.date} img={item.imgUrl} />))}
        </div>

    </section>
}
