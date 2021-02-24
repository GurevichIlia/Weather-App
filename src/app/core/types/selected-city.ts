import {CityWeather} from './weather.interface';

export class SelectedCity {
  constructor(
    public cityName: string = '',
    public units: TemperatureTypes | string = '',
    public weather: CityWeather = null
  ) { }
}

export enum TemperatureTypes {
  Fahrenheit = 'imperial',
  Celsius = 'metric',
  Kelvin = ''
}
