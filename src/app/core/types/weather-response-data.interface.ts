export interface WeatherResponseData {
  name: string,
  weather: WeatherArr[],
  main: MainInfo
}

export interface WeatherArr {
  description: string
  icon: string
  id: number
  main: string
}

export interface MainInfo {
  feels_like: number
  humidity: number
  pressure: number
  temp: number
  temp_max: number
  temp_min: number
}
