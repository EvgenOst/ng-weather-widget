import { PlacesTypeEnum } from './places-type.enum';

export interface Place {
  img: string;
  address: string;
  phone: string; // дополнительно задание pipe для форматирования
  weather: Weather;
  socialInfo: UserInfo;
  type: PlacesTypeEnum;
}

export interface Weather {
  title: string;
  icon: string;
  water: number;
  temperature: number;
}

export interface UserInfo {
  title: string;
  img: string;
  followers: number;
  following: number;
}
