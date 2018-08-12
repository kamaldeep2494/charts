import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private _http: HttpClient) {
  		

   }

  //dailyForecast(){
  //return this._http.get("https://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
  //return this._http.get("https://samples.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid=b6907d289e10d714a6e88b30761fae22")
  //.map(result => result);
  //}

  public getJSON(): Observable<any> {
        return this._http.get("./assets/mydata.json")
    }

}
