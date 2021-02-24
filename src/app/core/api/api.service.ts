import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponseData } from '../types/weather-response-data.interface';



@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  fetchWeather(cityName: string, units: string = ''): Observable<WeatherResponseData> {
    const params = new HttpParams()
      .append('appid', environment.API_KEY)
      .append('q', cityName)
      .append('units', units)

    return this.http.get<WeatherResponseData>('http://api.openweathermap.org/data/2.5/weather', { params })
  }

}
