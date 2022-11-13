import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { GamesService } from 'src/app/shared/services/games-service/games-service.service';
import { DetailGame } from 'src/app/shared/models/detailGame';


@Component({
  selector: 'app-detail-game',
  templateUrl: './detail-game.component.html',
  styleUrls: ['./detail-game.component.scss']
})
export class DetailGameComponent implements OnInit {

  private id: string | null;
  public game:  DetailGame | null = null;
  public date: string = '';


  constructor(
    private route:ActivatedRoute,
    private gamesService: GamesService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    if (this.id != null) {
      this.gamesService.getGame(this.id).subscribe(game => {
        this.game = game;
        this.date = new Date(game.cheapestPriceEver.date).toLocaleDateString();
      })
    }
    else console.log('null id');
  }

}
