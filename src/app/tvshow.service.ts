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
    return this.http.get<ScoreShow[]>(`${environment.server}/search/shows?q=${search}`);
  }
  getDetails(id:number){
    return this.http.get<TvShow>(`${environment.server}/shows/${id}?embed[]=episodes&embed[]=cast`);
  }
}
