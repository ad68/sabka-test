export default function Index({ title, icon, desc }: any) {
    return (
        <div className='xl:w-[330px] cursor-pointer hover:shadow-2xl transition-all hover:shadow-primary h-[287px] px-[34px] group bg-white border border-[#BFBFBF] rounded-[10px] z-50 shadow-2xl flex flex-col items-center justify-center'>
            <div className='bg-primary group-hover:bg-secondary transition-all  mt-[-113px] w-[90px] h-[90px] flex justify-center items-center rounded-tl-[20px] rounded-br-[20px]'>
                {icon}
            </div>
            <p className='text-[18px] mt-[26px] font-bold'>{title}</p>
            <p className='mt-[18px] text-justify'>{desc}</p>
        </div>

    );
}
