import { DownloadIcon } from 'lucide-react'
import { NextPage } from 'next'
const Index: NextPage = () => {
    return <section className='max-w-6xl m-auto mb-5 h-[600px]'>
        <h1 className="font-bold text-center  text-xl text-primary mt-5">اطلاعات و صورت های مالی</h1>
        <div className="flex items-center px-4 gap-2 mt-5 border border-primary p-2 rounded-full text-primary">
            <DownloadIcon className="w-[40px]" />
            <a href={'/download/finance-data.pdf'} target="_blank">اطلاعات و صورت های مالی.pdf</a>
        </div>
    </section>
}
export default Index