import { NextPage } from 'next'
const Index: NextPage = () => {
    return <section className='max-w-6xl m-auto mb-5'>
        <h1 className="font-bold text-center  text-xl text-primary mt-5">فرصت های اشتغال</h1>
        <article className='p-10 py-[30px] mt-5 border-[2px] border-primary rounded-lg bg-white'>
            <ul className='list-disc leading-10'>
                <li>کسب مجوز استخدام از سازمان امور اداری و استخدامی کشور</li>
                <li>فراخوان شرکت در آزمون استخدامی</li>
                <li>برگزاری آزمون کتبی توسط سازمان سنجش کشور</li>
                <li>برگزاری مصاحبه عمومی و تخصصی</li>
                <li>اعلام نتایج به میزان دو برابر ظرفیت</li>
                <li>انجام مراحل گزینش</li>
                <li>اعلام نتیجه نهایی</li>
                <li>انجام معاینات پزشکی</li>
                <li>برگزاری دوره های آموزشی بدو خدمت</li>
            </ul>
            <p>
                <strong>تبصره:</strong>
                درصورت کسب مجوز لازم برای استخدام و همکاری از سازمان امور اداری و استخدامی کشور مراتب از طریق رسانه های عمومی اعلام می گردد.
            </p>
        </article>
    </section>
}
export default Index