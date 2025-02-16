import React, { CSSProperties, FC } from 'react'
import classes from './styles.module.css'
import { IEvent } from '../../types'
import Exercises from '../Exercises';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Plus from "../../assets/plus.tsx";

interface DayEventProps {
  data: IEvent;
  onAddExercise: (eventId: string) => void;
}

const DayEvent: FC<DayEventProps> = ({data, onAddExercise}) => {
  const {listeners, attributes, setNodeRef, transform, transition, isDragging} = useSortable({
    id: data.id,
    data: {...data},
  })

  const customStyle: CSSProperties = {
    transition,
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : undefined,
  }

  const handleAddExercise = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddExercise(data.id);
  };

  return (
    <div 
      ref={setNodeRef}
      className={classes.container}
      style={customStyle}
    >
      <div {...listeners} {...attributes}>
        <div className={classes.eventTitle}>
          <h5 className={classes.title}>{data.title}</h5>
          <button className={classes.btn} style={{color: '#C4C4C4'}}><span>&#8943;</span></button>
        </div>
        <Exercises data={data.exercises} />
      </div>

      <div className={classes.footer} onClick={e => e.stopPropagation()}>
        <button
          className={classes.btn}
          onClick={handleAddExercise}
        >
          <Plus />
        </button>
      </div>
    </div>
  )
}

export default DayEvent
