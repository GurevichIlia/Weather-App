import { TemperatureTypes } from './selected-city';

export interface WeatherRequestData {
  cityName: string,
  units: TemperatureTypes,
  cityControlIndex: number
}




