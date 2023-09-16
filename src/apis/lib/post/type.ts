import { TimeType } from 'pages/OnboardingPage/store/formStore';
import { DayType } from 'pages/OnboardingPage/store/formStore';

export interface PostResponse {
  address: string;
  date: string;
  menuname: string;
  application: number;
  number: number;
  img: string;
}

export interface WriteRequest {
  user: 'a';
  menuname: string;
  date: DayType;
  time: TimeType;
  min: number;
  max: number;
  lat: number;
  lng: number;
  address: string;
  detailAdd: string;
  status: 'N';
  money: number;
  img: string;
  contact: string;
}
