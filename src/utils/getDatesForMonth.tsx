// Helper function to get all dates for a given month
export const getDatesForMonth = (year:number, month:number) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const dates = [];
    
    // Calculate dates from previous month
    const firstDayOfWeek = firstDay.getDay();
    const prevMonth = new Date(year, month, 0); // Last day of previous month
    const prevMonthDays = prevMonth.getDate();
    
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const day = prevMonthDays - i;
      dates.push(new Date(year, month - 1, day));
    }
    
    // Add all days of the current month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      dates.push(new Date(year, month, day));
    }
    
    // Add dates from next month
    const totalDays = dates.length;
    const remainingDays = (7 - (totalDays % 7)) % 7;
    for (let i = 1; i <= remainingDays; i++) {
      dates.push(new Date(year, month + 1, i));
    }
  
    return dates;
  
    };
  