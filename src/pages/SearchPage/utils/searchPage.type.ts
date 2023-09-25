export interface Posts {
  post_idx: number;
  menuname: string;
  date: string;
  time: string;
  min: number;
  max: number;
  address: string;
  status: string;
  lat: number;
  lng: number;
  img: string;
  great: number;
  good: number;
  choose: number;
}

export interface PostDetailItem {
  idx: number;
  ingredient: string;
  price: number;
  url: string;
}

export interface PostDetail {
  menuname: string;
  menucontent: string;
  menuimg: string;
  writer: string;
  great: number;
  good: number;
  address: string;
  detailAdd: string;
  date: string;
  realdate: string;
  time: string;
  item: PostDetailItem[];
  money: number;
  status: string;
}

export interface MarkerInfo {
  post_idx: number;
  menuname: string;
  date: string;
  address: string;
  status: string;
  great: number;
  good: number;
  distance: number;
}

export interface InfowindowProps {
  infoRef: React.RefObject<HTMLDivElement>;
  markerInfo: MarkerInfo;
}

export interface MenuInfoProps {
  img: string;
  menuname: string;
  menuContent: string;
}

export interface GatheringTimeInfoProps {
  time: string;
}

export interface FounderInfoProps {
  founder: string;
  address: string;
  great: number;
  good: number;
  founderInfoBorder: string;
}

export interface IngredientItemProps {
  img: string;
  ingredient: string;
  price: number;
}
