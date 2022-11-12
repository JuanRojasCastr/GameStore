import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../../models/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  urlBase: string = 'https://www.cheapshark.com/api/1.0/games?title=name&limit=10';

  constructor(private http: HttpClient) { }

  getGames(name :string): Observable<Game[]> {
    let url = this.urlBase.replace(/name/g, name);
    return this.http.get<Game[]>(url);
  }
}
