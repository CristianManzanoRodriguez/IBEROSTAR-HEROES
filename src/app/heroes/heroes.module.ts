import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import {  HeroesSearchComponent } from './components/heroes-search_/heroes-search.component';
import { HeroesPaginationComponent } from './components/heroes-pagination/heroes-pagination.component';


@NgModule({
  declarations: [
    HeroesListComponent,
    HeroCardComponent,
    HeroesPaginationComponent,
    HeroesSearchComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule, 
    AngularMaterialModule
  ]
})
export class HeroesModule { }
