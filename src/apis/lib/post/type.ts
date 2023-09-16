import { TimeType } from 'pages/OnboardingPage/store/formStore';
import { DayType } from 'pages/OnboardingPage/store/formStore';

export interface PostResponse {
  address: string;
  choose: number;
  date: DayType;
  time: TimeType;
  good: number;
  greate: number;
  lat: number;
  lng: number;
  min: number;
  max: number;
  menuname: string;
  post_idx: number;
  status: 'N';
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
