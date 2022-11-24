import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import {  HeroesSearchComponent } from './components/heroes-search_/heroes-search.component';
import { HeroesPaginationComponent } from './components/heroes-pagination/heroes-pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteHeroPopupComponent } from './components/delete-hero-popup/delete-hero-popup.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';


@NgModule({
  declarations: [
    HeroesListComponent,
    HeroCardComponent,
    HeroesPaginationComponent,
    HeroesSearchComponent,
    DeleteHeroPopupComponent,
    HeroFormComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule, 
    AngularMaterialModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class HeroesModule { }
