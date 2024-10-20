export default function DayAndMonthAndYear(dateString) {
    const year = dateString.slice(2, 4);
    const month = dateString.slice(5, 7);
    const day = dateString.slice(8, 10);
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  
  }