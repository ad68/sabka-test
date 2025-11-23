
import Image from 'next/image'
import News from './components/News'
import Slider from './components/Slider'
export default function Index() {
    return (
        <section className='relative mt-12 w-full'>
            <Image width={300} height={400} className='absolute left-0 top-[150px] w-[180px]' src="/assets/img/landing/gandom.png" alt='' />
            <section className='relative m-auto mt-5 max-w-7xl gap-[60px] flex justify-between h-[627px] z-[-10px]'>
                <section className='w-[800px] h-[500px]'>
                    <Slider />
                </section>
                <News />
            </section>
            <Image width={300} height={400} className='absolute right-0 top-[150px] w-[180px] scale-x-[-1]' src="/assets/img/landing/gandom.png" alt='' />
        </section>

    );
}
