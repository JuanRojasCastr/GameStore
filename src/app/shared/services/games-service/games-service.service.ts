import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../../models/game';
import { DetailGame } from '../../models/detailGame';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private urlGamesList: string = 'https://www.cheapshark.com/api/1.0/games?title=name&limit=10';
  private urlDetailGame: string = 'https://www.cheapshark.com/api/1.0/games?id=&id';

  constructor(private http: HttpClient) { }

  getGames(name :string): Observable<Game[]> {
    let url = this.urlGamesList.replace(/name/g, name);
    return this.http.get<Game[]>(url);
  }

  getGame(name :string): Observable<DetailGame> {
    let url = this.urlDetailGame.replace(/&id/g, name);
    return this.http.get<DetailGame>(url);
  }
}
