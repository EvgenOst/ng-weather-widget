import { Place } from '../models/place.model';
import { PlacesTypeEnum } from '../models/places-type.enum';

export const Places: Place[] = [
  {
    img: 'assets/images/1.jpg',
    address: 'Краснодар',
    phone: '79991234567',
    weather: {
      title: 'рай на земле1',
      icon: 'assets/images/cloudy.png',
      water: 33,
      temperature: 50
    },
    socialInfo: {
      title: 'человек 1',
      img: 'assets/images/b1.jpg',
      followers: 50,
      following: 100
    },
    type: PlacesTypeEnum.tours
  },
  {
    img: 'assets/images/1.jpg',
    address: 'Таганрог',
    phone: '73291224567',
    weather: {
      title: 'рай на земле2',
      icon: 'assets/images/cloudy.png',
      water: 334,
      temperature: 450
    },
    socialInfo: {
      title: 'человек 2',
      img: 'assets/images/b1.jpg',
      followers: 150,
      following: 1030
    },
    type: PlacesTypeEnum.fishing
  },
  {
    img: 'assets/images/1.jpg',
    address: 'Омск',
    phone: '79994324567',
    weather: {
      title: 'рай на земле3',
      icon: 'assets/images/cloudy.png',
      water: 3,
      temperature: 520
    },
    socialInfo: {
      title: 'человек 3',
      img: 'assets/images/b1.jpg',
      followers: 501,
      following: 1050
    },
    type: PlacesTypeEnum.hotel
  },
  {
    img: 'assets/images/1.jpg',
    address: 'Саратов',
    phone: '71231234567',
    weather: {
      title: 'рай на земле4',
      icon: 'assets/images/cloudy.png',
      water: 39,
      temperature: 33
    },
    socialInfo: {
      title: 'человек 4',
      img: 'assets/images/b1.jpg',
      followers: 5210,
      following: 10023
    },
    type: PlacesTypeEnum.tours
  },
  {
    img: 'assets/images/1.jpg',
    address: 'Место',
    phone: '79991234567',
    weather: {
      title: 'рай на земле5',
      icon: 'assets/images/cloudy.png',
      water: 20,
      temperature: 10
    },
    socialInfo: {
      title: 'человек 5',
      img: 'assets/images/b1.jpg',
      followers: 5,
      following: 0
    },
    type: PlacesTypeEnum.tours
  }
];
