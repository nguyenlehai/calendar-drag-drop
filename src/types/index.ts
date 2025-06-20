export type IExcercise = {
  id: string;
  title: string;
  quantity: number;
  description: string;
  eventId: string;
  date: string;
}

export type IEvent = {
  id: string;
  title: string;
  exercises: IExcercise[];
  date: string;
}

export enum ItemType {
  EVENT = 'event',
  EXERCISE = 'exercise',
}