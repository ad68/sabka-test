
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import ListItem from './components/ListItem'
export default function Index() {
    return <div className="w-full py-[96px] m-auto rounded-2xl mt-[30px] overflow-hidden  max-w-[1440px] bg-[#e9aa1e] relative flex justify-center items-center">
        <div className="absolute flex justify-center top-[-50px]">
            <div className="w-[100px] h-[100px] flex justify-center items-end bg-[#fafafa] rounded-full">
                <ArrowDown className="mb-[20px]" />
            </div>
        </div>
        <div className="w-[1134px] h-[839px] max-w-full rounded-[30px] bg-white px-[19px] py-[36px]">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-[31px]">
                <div>
                    <Image width={600} height={300} quality={100} className="w-[546px]" src="/assets/img/contact/sticky-inner.png" alt="" />
                    <div>
                        <h3 className="text-[32px] font-bold text-[#284D2C] mt-[36px]">راه هــای ارتــبـاطــی ما</h3>
                        <div className="mt-[22px] flex flex-col gap-[15px]">
                            <ListItem>تلفن :  64009000</ListItem>
                            <ListItem>دورنگار :  66557715</ListItem>
                            <ListItem>سامانه پيام كوتاه :66557715</ListItem>
                            <ListItem>پست الکترونیک :<br />
                                info@sbkiran.ir - bimeh-keshavarzi@sbkiran.ir</ListItem>
                            <ListItem>کد دستوری ثبت اعلان خسارت : #64009*6655*</ListItem>
                            <ListItem>صندوق پستی :   3365-14155</ListItem>
                            <ListItem>
                                آدرس: <br />
                                تهران - خیابان شهید دکتر حبیب الهی - خیابان یکم دریان نو (سروش یکم) - تقاطع زنجان شمالی - پلاک 58
                            </ListItem>
                        </div>
                    </div>
                </div>
                <div>
                    <Image width={600} height={300} quality={100} className="w-[519px]" src="/assets/img/contact/sticky-img.png" alt="" />

                </div>
            </div>
        </div>
        <Image width={350} height={350} quality={100} className="w-[323px] absolute bottom-0 right-0" src="/assets/img/contact/plant.png" alt="" />
    </div>
}
