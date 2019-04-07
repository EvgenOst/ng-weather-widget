import { Place } from '../models/place.model';
import { PlacesTypeEnum } from '../models/places-type.enum';

export const Places: Place[] = [
  {
    img: 'assets/images/1.jpg',
    address: 'Место 1',
    phone: '79991234567',
    weather: {
      title: 'рай на земле 1',
      icon: 'assets/images/cloudy.png',
      water: 33,
      temperature: 25
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
    img: 'assets/images/2.jpg',
    address: 'Место 2',
    phone: '73291224567',
    weather: {
      title: 'рай на земле2',
      icon: 'assets/images/cloudy.png',
      water: 26,
      temperature: 30
    },
    socialInfo: {
      title: 'человек 2',
      img: 'assets/images/b2.gif',
      followers: 150,
      following: 1030
    },
    type: PlacesTypeEnum.fishing
  },
  {
    img: 'assets/images/3.jpg',
    address: 'Место 3',
    phone: '79994324567',
    weather: {
      title: 'рай на земле3',
      icon: 'assets/images/cloudy.png',
      water: 10,
      temperature: 15
    },
    socialInfo: {
      title: 'человек 3',
      img: 'assets/images/b3.gif',
      followers: 501,
      following: 1050
    },
    type: PlacesTypeEnum.hotel
  },
  {
    img: 'assets/images/4.jpg',
    address: 'Место 4',
    phone: '71231234567',
    weather: {
      title: 'рай на земле4',
      icon: 'assets/images/cloudy.png',
      water: 39,
      temperature: 33
    },
    socialInfo: {
      title: 'человек 4',
      img: 'assets/images/b4.jpg',
      followers: 5210,
      following: 10023
    },
    type: PlacesTypeEnum.tours
  },
  {
    img: 'assets/images/5.jpg',
    address: 'Место 5',
    phone: '79991234567',
    weather: {
      title: 'рай на земле5',
      icon: 'assets/images/cloudy.png',
      water: 20,
      temperature: 25
    },
    socialInfo: {
      title: 'человек 5',
      img: 'assets/images/b5.jpg',
      followers: 5,
      following: 0
    },
    type: PlacesTypeEnum.tours
  },
  {
    img: 'assets/images/6.jpg',
    address: 'Место 6',
    phone: '79991234567',
    weather: {
      title: 'рай на земле6',
      icon: 'assets/images/cloudy.png',
      water: 1,
      temperature: -2
    },
    socialInfo: {
      title: 'человек 6',
      img: 'assets/images/b6.png',
      followers: 5,
      following: 0
    },
    type: PlacesTypeEnum.hotel
  }
];
