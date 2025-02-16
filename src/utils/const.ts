import { IEvent, IExcercise } from '../types';

export const WEEKDAY = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

// Get the current date
export const getCurrentDate = () => {
  const today = new Date();
  return today.getDate();
};

// Get the first day of the week (Monday)
export const getFirstDayOfWeek = () => {
  const today = new Date();
  const currentDay = today.getDay();
  const diff = currentDay === 0 ? 6 : currentDay - 1; // Convert so that Monday is the first day of the week

  const monday = new Date(today);
  monday.setDate(today.getDate() - diff);
  return monday;
};

// Get the list of days in the week
export const getWeekDays = () => {
  const monday = getFirstDayOfWeek();
  const weekDays = [];
  
  for (let i = 0; i < 7; i++) {
    const day = new Date(monday);
    day.setDate(monday.getDate() + i);
    
    weekDays.push({
      id: `${day.getDate().toString().padStart(2, '0')}${(day.getMonth() + 1).toString().padStart(2, '0')}`,
      date: day.getDate(),
    });
  }
  
  return weekDays;
};

export const today = getCurrentDate();

// Add a new function to get the date by day of the week
export const getDayIdByWeekday = (weekday: number) => {
  const monday = getFirstDayOfWeek();
  const targetDate = new Date(monday);
  targetDate.setDate(monday.getDate() + weekday);
  
  return `${targetDate.getDate().toString().padStart(2, '0')}${(targetDate.getMonth() + 1).toString().padStart(2, '0')}`;
};

// Function to map event from old date to new date
export const mapEventToCurrentWeek = (event: IEvent) => {
  // Determine which day of the week the event belongs to (0 = Monday, 1 = Tuesday, ...)
  let weekday;
  const originalDate = event.date;

  // Map the old date to the corresponding day
  if (originalDate === 'tuesday') weekday = 1;
  else if (originalDate === 'wednesday') weekday = 2;

  if (weekday === undefined) return event;

  const newDate = getDayIdByWeekday(weekday);
  
  return {
    ...event,
    date: newDate,
    exercises: event.exercises?.map((ex: IExcercise) => ({
      ...ex,
      date: newDate
    }))
  };
};