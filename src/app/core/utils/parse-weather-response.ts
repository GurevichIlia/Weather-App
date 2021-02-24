import { TemperatureTypes } from '../types/selected-city';
import { WeatherResponseData } from '../types/weather-response-data.interface';
import {CityWeather} from '../types/weather.interface';
export function parseWeatherResponse(weatherResponse: WeatherResponseData, units: TemperatureTypes): CityWeather {
  const { name, weather, main } = weatherResponse
  const { icon, description } = weather[0]
  const resultWeather: CityWeather = {
    cityName: name,
    temperature: Math.floor(main.temp),
    icon,
    description,
    temperatureType: units
  }

  return resultWeather
}
