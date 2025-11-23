'use client'
export default function Index({ goToSection1, goToSection2, goToSection3, goToSection4, goToSection5, activeSection }: any) {

    return <section className="fixed w-full top-[70px] flex justify-center mt-[50px] z-50">
        <div className=" w-[1000px] bg-[whitesmoke] px-[25px] rounded-2xl gap-4 h-[80px] flex items-center">
            <button onClick={goToSection1} className={`w-[200px] h-[40px] rounded-full ${activeSection === 1 ? "bg-primary text-white" : "bg-white text-primary"} shadow-lg flex justify-center items-center`}>
                پیشینه
            </button>
            <button onClick={goToSection2} className={`w-[200px] h-[40px] rounded-full ${activeSection === 2 ? "bg-primary text-white" : "bg-white text-primary"} shadow-lg flex justify-center items-center`}>
                وظايف
            </button>
            <button onClick={goToSection3} className={`w-[200px] h-[40px] rounded-full ${activeSection === 3 ? "bg-primary text-white" : "bg-white text-primary"} shadow-lg flex justify-center items-center`}>
                اساسنامه
            </button>
            <button onClick={goToSection4} className={`w-[200px] h-[40px] rounded-full ${activeSection === 4 ? "bg-primary text-white" : "bg-white text-primary"} shadow-lg flex justify-center items-center`}>
                منشور اخلاقی
            </button>
            <button onClick={goToSection5} className={`w-[200px] h-[40px] rounded-full ${activeSection === 5 ? "bg-primary text-white" : "bg-white text-primary"} shadow-lg flex justify-center items-center`}>
                قوانین و مقررات
            </button>
        </div>
    </section>
}
