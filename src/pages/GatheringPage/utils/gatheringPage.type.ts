import { PostDetailItem } from 'pages/SearchPage/utils/searchPage.type';

export interface Matchings {
  menuName: string;
  img: string;
  address: string;
  menuPrice: number;
  matchingIdx: number;
  postIdx: number;
  postStatus: string;
  postDate: string;
}

interface MatchingUsers {
  username: string;
  matchingIndex: number;
  contactMethod: string;
  review: boolean;
  status: string;
}

export interface MatchingDetail {
  menuname: string;
  menucontent: string;
  menuimg: string;
  price: number;
  writer: string;
  great: number;
  good: number;
  address: string;
  item: PostDetailItem[];
  matchingUsers: MatchingUsers[];
}

export interface GatheringGroupProps {
  data: Matchings[];
}

export interface GatheringItemProps {
  data: Matchings;
}

export interface RejectModalProps {
  contactName: string;
  contactNum: number;
  setIsRejectModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  matchingIdx: number;
  getMatchingDetail: () => void;
}

export interface ContactInfoProps {
  matchingDetail: MatchingDetail;
  postStatus: string;
  getMatchingDetail?: () => void;
}
