import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ScoreShow } from './model/ScoreShow';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TvShow } from './model/TvShow';
import { Person } from './model/Person';

@Injectable({
  providedIn: 'root'
})
export class TvshowService {
  
  constructor(private http:HttpClient) { }

  getShows(search:string):Observable<ScoreShow[]>{
    console.log("getShows in service called");
    return this.http.get<ScoreShow[]>(`${environment.server}/search/shows?q=${search}`);
  }
  getDetails(id:number){
    console.log("Details in service called");
    return this.http.get<TvShow>(`${environment.server}/shows/${id}`);
  }
  getCasts(id:number){
    console.log("Casts in service called");
    return this.http.get<Person[]>(`${environment.server}/shows/${id}/cast`);
  }
  getEpisodes(id:number){
    console.log("Episodes in service called");
    return this.http.get<TvShow>(`${environment.server}/shows/${id}?embed=episodes`);
  }
}
