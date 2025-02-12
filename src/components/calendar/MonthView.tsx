import { getDatesForMonth } from "~/utils/getDatesForMonth";
import DateBox from "./DateBox";

interface MonthViewProps {
    year: number,
    month: number
  }

  export default function MonthView({year, month }: MonthViewProps){
    
    const dates = getDatesForMonth(year, month);
    console.log(dates)
    
    return (
      <div className="MonthView h-full w-full flex flex-col gap-2">
        <div className="DayGrid grid grid-cols-7 gap-2 h-fit w-full">
          {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday'].map(day => (
            <div key={day} className="Day leading-4 text-lg font-medium text-G5 w-full text-center h-fit">
              {day}
            </div>  
          ))}
          </div>
        <div className="CalendarGrid grid grid-cols-7 gap-2 h-full w-full">
          {dates.map((date, i) => (
            <DateBox key={i} date={date} currentMonth={month} />
          ))}
        </div>
      </div>
    );
  };