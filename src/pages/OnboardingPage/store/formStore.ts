import { create } from 'zustand';
import { Menu } from '../utils/types';

export const DEFAULT_ADDRESS = '장소 정보 내용';

export type DayType = '오늘' | '내일';
export type TimeType =
  | '아침 (8:00 ~ 10:00)'
  | '점심 (10:00 ~ 12:00)'
  | '점심 (12:00 ~ 14:00)'
  | '저녁 (16:00 ~ 18:00)';

export type COMMAND = 'max' | 'min';

export type ContactType = '카카오톡 ID' | '오픈 채팅방 링크' | '전화번호';

interface ApplyFormState {
  businessNumber: string;
  address: string;
  detailAddress: string;
  day: DayType | null;
  time: TimeType | null;
  memberCount: {
    max: number;
    min: number;
  };
  menu: Menu | null;
  cost: string;
  contactOption: ContactType | null;
  contact: string;
  actions: {
    setBusinessNumber: (number: string) => void;
    setAddress: (address: string) => void;
    setDetailAddress: (address: string) => void;
    setDay: (day: DayType) => void;
    setTime: (time: TimeType) => void;
    increaseMember: (command: COMMAND) => void;
    decreaseMember: (command: COMMAND) => void;
    setMenu: (menu: Menu) => void;
    setCost: (cost: string) => void;
    setContactOption: (option: ContactType) => void;
    setContact: (input: string) => void;
  };
}

export const useApplyFormStore = create<ApplyFormState>((set, get) => ({
  // location
  businessNumber: '',
  address: DEFAULT_ADDRESS,
  detailAddress: '',
  // schedule
  day: null,
  time: null,
  // memberCount
  memberCount: {
    max: 4,
    min: 1,
  },
  menu: null,
  cost: '',
  contactOption: null,
  contact: '',
  actions: {
    setBusinessNumber: (number: string) => set(() => ({ businessNumber: number })),
    setAddress: (address: string) => set(() => ({ address: address })),
    setDetailAddress: (address: string) => set(() => ({ detailAddress: address })),
    setDay: (day: '오늘' | '내일') => set(() => ({ day: day })),
    setTime: (time: TimeType) => set(() => ({ time: time })),
    increaseMember: (command: COMMAND) => {
      if (get().memberCount[command] >= 4) {
        return;
      }
      set((state) => {
        return { memberCount: { ...state.memberCount, [command]: state.memberCount[command] + 1 } };
      });
    },
    decreaseMember: (command: COMMAND) => {
      if (get().memberCount[command] <= 1) {
        return;
      }
      set((state) => {
        return { memberCount: { ...state.memberCount, [command]: state.memberCount[command] - 1 } };
      });
    },
    setMenu: (menu: Menu) => set(() => ({ menu: menu })),
    setCost: (cost: string) => set(() => ({ cost: cost })),
    setContactOption: (option: ContactType) => set(() => ({ contactOption: option })),
    setContact: (input: string) => set(() => ({ contact: input })),
  },
}));

export const useApplyForm = () =>
  useApplyFormStore(
    ({
      businessNumber,
      address,
      detailAddress,
      day,
      time,
      memberCount,
      menu,
      cost,
      contact,
      contactOption,
    }) => ({
      businessNumber,
      address,
      detailAddress,
      day,
      time,
      memberCount,
      menu,
      cost,
      contact,
      contactOption,
    }),
  );

export const useFormActions = () => useApplyFormStore((state) => state.actions);
