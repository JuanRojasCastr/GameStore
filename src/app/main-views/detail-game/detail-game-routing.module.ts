import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { DetailGameComponent } from './detail-game.component';

const routes: Routes = [
  {
    path: 'game/:id',
    component: DetailGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailGameRoutingModule { }
