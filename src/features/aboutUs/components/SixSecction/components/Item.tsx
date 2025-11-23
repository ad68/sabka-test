

export default function Index({ title, icon, index }: any) {
    const textColor = (index % 2 == 0) ? 'text-[#E9AA1E]' : 'text-[#558C5A]';
    const bgColor = (index % 2 == 0) ? '#E9AA1E' : '#558C5A';
    return (
        <div className={`relative transition-all w-[200px]`}  >
            <div
                className={`
                    pointer-events-none absolute -right-4 top-2 bottom-2 w-3 mt-14
                    bg-[radial-gradient(circle,currentColor_2.5px,transparent_2.5px)]
                    [background-size:13px_13px] bg-repeat
                    ${textColor}
                    `}
            />

            <div
                className={`
                    pointer-events-none absolute -left-4 -top-3 bottom-40 w-3
                    bg-[radial-gradient(circle,currentColor_2.5px,transparent_2.5px)]
                    [background-size:13px_13px] bg-repeat
                        ${textColor}
                    `}
            />

            <div
                className={`
                    pointer-events-none absolute left-0 right-[50px] -top-4 h-3
                    bg-[radial-gradient(circle,currentColor_2.5px,transparent_2.5px)]
                    [background-size:13px_13px] bg-repeat
                    ${textColor}
                    `}
            />

            <div className={`relative h-[200px] rounded-2xl bg-white max-w-4xl shadow-xl flex flex-col justify-center`}>
                <span
                    className={`
                        pointer-events-none absolute -top-3 -right-3 block h-16 w-16
                        border-4  border-l-0 border-b-0
                        rounded-tr-[32px]
                        `}
                    style={{ borderColor: bgColor }}
                />
                <div className="flex justify-center mb-4">
                    {icon}
                </div>
                <h2 className="text-center text-[12px] font-bold mb-2">{title}</h2>
            </div>
        </div>

    );
}
