import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GamesService } from '../services/games-service/games-service.service';
import  {SearchQueryService} from '../services/search-service/search-query.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SearchQueryService,
    GamesService
  ]
})
export class CoreModule {}
