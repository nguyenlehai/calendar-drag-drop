import { IEvent } from "../types";
import { getWeekDays, mapEventToCurrentWeek } from '../utils/const';

export const DAY_OF_WEEK = getWeekDays();

const originalEvents: IEvent[] = [
  {
    id: 'event-02',
    title: 'Chest day - With arm exercises',
    date: 'tuesday',
    exercises: [
      {
        id: 'card-03',
        title: 'Bench Press Medium',
        quantity: 3,
        description: '50 lb x 5, 60 lb x 5, 70 lb x 5',
        eventId: 'event-02',
        date: '0610',
      },
      {
        id: 'card-04',
        title: 'Exercise B',
        quantity: 1,
        description: '40lb X 10',
        eventId: 'event-02',
        date: '0610',
      }
    ],
  },
  {
    id: 'event-03',
    title: 'Leg day',
    date: 'wednesday',
    exercises: [
      {
        id: 'card-05',
        title: 'Exercise C',
        quantity: 1,
        description: '30 lb x 6',
        date: '0710',
        eventId: 'event-03'
      },
      {
        id: 'card-06',
        title: 'Exercise D',
        quantity: 1,
        description: '40 lb x 5',
        date: '0710',
        eventId: 'event-03'
      },
      {
        id: 'card-07',
        title: 'Exercise E',
        quantity: 1,
        description: '50 lb x 5',
        date: '0710',
        eventId: 'event-03'
      },
    ],
  },
  {
    id: 'event-04',
    title: 'Arm day',
    date: 'wednesday',
    exercises: [
      {
        id: 'card-08',
        title: 'Exercise F',
        quantity: 1,
        description: '60 lb x 6',
        date: '0710',
        eventId: 'event-04'
      }
    ],
  }
];

export const events: IEvent[] = originalEvents.map(mapEventToCurrentWeek);