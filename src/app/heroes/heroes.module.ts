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
import { EditHeroPopupComponent } from './components/edit-hero-popup/edit-hero-popup.component';
import { CreateHeroPopupComponent } from './components/create-hero-popup/create-hero-popup.component';
import { HeroFormTemplateComponent } from './components/hero-form-template/hero-form-template.component';


@NgModule({
  declarations: [
    HeroesListComponent,
    HeroCardComponent,
    HeroesPaginationComponent,
    HeroesSearchComponent,
    DeleteHeroPopupComponent,
    EditHeroPopupComponent,
    CreateHeroPopupComponent,
    HeroFormTemplateComponent,
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
