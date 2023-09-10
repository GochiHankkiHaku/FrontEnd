export interface InfowindowProps {
  infoRef: React.RefObject<HTMLDivElement>;
  markerInfo: any;
}

export interface MenuInfoProps {
  img: string;
  menuname: string;
  menuContent: string;
}

export interface GatheringTimeProps {
  time: string;
}

export interface FounderInfoProps {
  founder: string;
  address: string;
  great: number;
  good: number;
}

export interface IngredientInfoProps {
  img: string;
  ingredient: string;
  price: number;
}
