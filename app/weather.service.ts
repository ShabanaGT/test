import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey="fdffc11862msh54dfb89e3045be9p1fd28fjsn2c0bcd0abbb9"
  apiUrl="https://the-weather-api.p.rapidapi.com/api/weather"
  constructor(private http:HttpClient) { }
  getWeather(searchField:any):Observable<any>{
    let headers=new HttpHeaders().set('x-rapidapi-key',this.apiKey).set('x-rapidapi-host',"the-weather-api.p.rapidapi.com")
    let params={headers}

    return this.http.get(`${this.apiUrl}/${searchField}`,params);
  }
}
