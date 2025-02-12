interface DateBoxProps {
    date?: Date | null
    currentMonth: number
}

export default function DateBox({date, currentMonth}:DateBoxProps){

    const isCurrentMonth = date?.getMonth() === currentMonth

    return (
        <div className={`DateBox w-full h-full border rounded-[10px] py-2 px-3 shadow-optii border-G4 ${isCurrentMonth ? "bg-N1 text-black":"bg-G2 text-G4"}`}>
            {date && <p className="Date text-lg text-bold text-sans">
                {date.getDate()}
            </p>}
        </div>
    )
}