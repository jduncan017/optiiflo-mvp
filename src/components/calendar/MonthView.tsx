import { getDatesForMonth } from "~/utils/getDatesForMonth";
import DateBox from "./DateBox";

interface MonthViewProps {
  year: number;
  month: number;
}

export default function MonthView({ year, month }: MonthViewProps) {
  const dates = getDatesForMonth(year, month);

  return (
    <div className="MonthView flex h-full w-full flex-col gap-4">
      <div className="DayGrid grid h-fit w-full grid-cols-7 gap-2">
        {[
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thusday",
          "Friday",
          "Saturday",
        ].map((day) => (
          <div
            key={day}
            className="Day h-fit w-full text-center text-lg font-medium leading-4 text-N1"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="CalendarGrid grid h-full w-full grid-cols-7 border-t border-G3">
        {dates.map((date, i) => (
          <DateBox key={i} date={date} currentMonth={month} />
        ))}
      </div>
    </div>
  );
}
