import Videos from './Videos'
import Gallery from './Gallery'
import Files from './Files'
export default function Index() {
    return <>
        <h1 className='text-center font-bold text-[32px] text-primary mt-10 '>محتوای آموزشی</h1>
        <Videos />
        <Gallery />
        <Files />
    </>
}
