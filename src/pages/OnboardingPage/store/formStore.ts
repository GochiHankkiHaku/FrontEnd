import { create } from 'zustand';

export const DEFAULT_ADDRESS = '장소 정보 내용';

interface FormState {
  businessNumber: string;
  address: string;
  detailAddress: string;
  setBusinessNumber: (number: string) => void;
  setAddress: (address: string) => void;
  setDetailAddress: (address: string) => void;
}

export const useFormStore = create<FormState>((set) => ({
  businessNumber: '',
  address: DEFAULT_ADDRESS,
  detailAddress: '',
  setBusinessNumber: (number: string) => set(() => ({ businessNumber: number })),
  setAddress: (address: string) => set(() => ({ address: address })),
  setDetailAddress: (address: string) => set(() => ({ detailAddress: address })),
}));
