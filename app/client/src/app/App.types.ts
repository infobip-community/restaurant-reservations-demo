export interface APIResponseI {
  message?: string;
}

export enum TimePeriodI {
  TODAY = "today",
  TOMORROW = "tomorrow",
  ALL="all",
}

export interface MeetingI {
  id: string;
  title: string;
  room: string;
  description: string;
  start_datetime: string;
  end_datetime: string;
  host: string;
  guest: string[];
  status: string;
}
