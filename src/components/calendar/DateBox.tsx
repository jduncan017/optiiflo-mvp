interface DateBoxProps {
  date?: Date | null;
  currentMonth: number;
}

export default function DateBox({ date, currentMonth }: DateBoxProps) {
  const isCurrentMonth = date?.getMonth() === currentMonth;

  return (
    <div
      className={`DateBox h-full w-full border-b border-r border-G3 px-3 py-2 shadow-optii ${isCurrentMonth ? "bg-N1 text-black" : "bg-G2 text-G4"}`}
    >
      {date && (
        <p className="Date text-bold text-sans text-lg">{date.getDate()}</p>
      )}
    </div>
  );
}
