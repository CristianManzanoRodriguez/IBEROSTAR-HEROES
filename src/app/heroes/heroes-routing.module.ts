import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'list', component: HeroesListComponent, title: 'Heroes List'},
      { path: '**', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
