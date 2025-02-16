import { FC } from 'react'
import classes from './styles.module.css'
import { today, WEEKDAY } from '../../utils/const';
import { IEvent } from '../../types';
import DayEvents from '../DayEvents';
import { useDroppable } from '@dnd-kit/core';
import Plus from '../../assets/plus';

interface DayProps {
  date: number;
  day: number;
  id: string;
  events: IEvent[];
  onAddEvent: (date: string) => void;
  onAddExercise: (eventId: string) => void;
}

const Day: FC<DayProps> = ({day, date, events, id, onAddEvent, onAddExercise}) => {
  const {setNodeRef} = useDroppable({
    id,
  })

  const isToday = date === today;

  const handleAddEvent = () => {
    onAddEvent(id);
  };
  
  return (
    <div className={classes.container}>
      <h5 style={{color: '#6A7988'}}>{WEEKDAY[day]}</h5>
      <div className={classes.wrapper} ref={setNodeRef}>
        <div className={classes.header}>
          <h4 className={`${classes.date} ${isToday ? classes.dateToday : ''}`}>
            {date.toString().padStart(2, '0')}
          </h4>
          <button
            className={classes.btn}
            onClick={handleAddEvent}
          >
            <Plus />
          </button>
        </div>
        <DayEvents data={events} onAddExercise={onAddExercise}/>
      </div>
    </div>
  )
}

export default Day
