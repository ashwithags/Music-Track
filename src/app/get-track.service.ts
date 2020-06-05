import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'node_modules/rxjs'
import { track } from './track';

@Injectable({
  providedIn: 'root'
})
export class GetTrackService {
private URL:string = '../assets/data/track.json';

  constructor(private http:HttpClient) { }

  getTrack():Observable<track[]>{
    return this.http.get<track[]>(this.URL);
  }

}
