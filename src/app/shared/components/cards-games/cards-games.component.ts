import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-cards-games',
  templateUrl: './cards-games.component.html',
  styleUrls: ['./cards-games.component.scss']
})
export class CardsGamesComponent implements OnInit {

  @Input()
  gamesList: Game[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
