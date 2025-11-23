'use client'
import dynamic from 'next/dynamic';
import Section1 from './Section1'
import ListItem from './ListItem'
import ContactUsForm from './ContactUsForm'
const Map = dynamic(() => import('./Map'), {
    ssr: false,
});
export default function Index() {
    return <main>
        <Section1 />
        <section className='mt-[-600px] relative z-10'>
            <ContactUsForm />
        </section>
        <section className='z-0 relative grid mt-[-52px] grid-cols-1 xl:grid-cols-2'>
            <div className='px-[20px] xl:pl-[100px] xl:pr-[100px] pt-[80px]'>
                <h3 className="text-[32px] font-bold text-[#284D2C] mt-[36px]">راه های ارتباطی ما</h3>
                <hr className='my-5' />
                <div className="mt-[22px] grid xl:grid-cols-2 gap-[15px]">
                    <ListItem>تلفن : <a href={`tel: 64009000`}>64009000</a></ListItem>
                    <ListItem>دورنگار :  66557715</ListItem>
                    <ListItem>سامانه پيام كوتاه :66557715</ListItem>
                    <ListItem>صندوق پستی :   3365-14155</ListItem>
                    <ListItem>پست الکترونیک 1 :
                        <a href={`mailto:info@sbkiran.ir`}>info@sbkiran.ir</a>
                    </ListItem>
                    <ListItem>پست الکترونیک 2 :
                        <a href={`mailto:bimeh-keshavarzi@sbkiran.ir`}>bimeh-keshavarzi@sbkiran.ir</a>
                    </ListItem>

                    <div className='xl:col-span-2'>
                        <ListItem>کد دستوری ثبت اعلان خسارت : #64009*6655*</ListItem>
                    </div>
                    <div className='xl:col-span-2'>
                        <ListItem>
                            آدرس: <br />
                            تهران - خیابان شهید دکتر حبیب الهی - خیابان یکم دریان نو (سروش یکم) - تقاطع زنجان شمالی - پلاک 58
                        </ListItem>
                    </div>


                </div>
            </div>
            <div className="bg-white w-full border h-[545px] m-auto shadow-md overflow-hidden mt-10 xl:mt-0">
                <Map />
            </div>
        </section>

    </main>
}
