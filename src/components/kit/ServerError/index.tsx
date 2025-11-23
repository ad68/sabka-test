import Warning from '@/assets/img/global/warning.png'
import Image from 'next/image'
export default function ServerError({ }) {
    return <div className='flex flex-col gap-5 justify-center items-center h-[500px]'>
        <Image width={200} height={200} className='max-w-full' src={Warning.src} alt="" />
        <div className='text-center text-primary font-bold xl:text-[26px]'>متاسفانه در برقراری ارتباط با سرور خطایی رخ داده است</div>
    </div>
}
