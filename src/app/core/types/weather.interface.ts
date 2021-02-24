import { TemperatureTypes } from './selected-city';

export interface CityWeather {
  cityName: string,
  temperature: number,
  icon: string,
  description: string,
  temperatureType: TemperatureTypes | string

}
