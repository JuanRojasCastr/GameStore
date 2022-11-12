import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchQueryService } from 'src/app/shared/services/search-service/search-query.service';
import { GamesService } from 'src/app/shared/services/games-service/games-service.service';
import { Game } from "src/app/shared/models/game";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchQ: string = '';
  searchQuery$: Observable<string>;
  gameList:  Game[] = [];
  searchStatus = '';


  constructor(
    private searchService: SearchQueryService,
    private gamesService: GamesService
  ) {
    this.searchQuery$ = this.searchService.getSearchQuery$();
  }

  ngOnInit(): void {
    this.searchQuery$.subscribe(value => {
      this.gamesService.getGames(value).subscribe(games => {
        if (!games.length && this.searchQ == '' ) this.searchStatus = 'empty';
        else if (!games.length && this.searchQ != '' ) this.searchStatus = 'notf';
        else this.searchStatus = '';
        this.gameList = games;
        console.log(games);
      });
      this.searchQ = value;
    })
  }

}
