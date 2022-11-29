import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Hero } from '../../models/hero';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit, OnDestroy{

  public heroes: Hero[] = [];
  public heroesSubscription?: Subscription;

  public page: number = 1;
  public query: string = '';
  public loading: boolean = false;

  public showAddHero: boolean = false;

  public pages?: number = 0;
  public pagesSubscription?: Subscription;

  constructor(
    public heroesServices: HeroesService,
    private route: ActivatedRoute,
  ){}

  ngOnInit() {
    this.setQueryParams()
    this.setHeroesSubscription()
    this.setPagesSubscription()

  }

  setPagesSubscription(){
    this.pagesSubscription = this.heroesServices.pages.subscribe( pages => {
      this.pages = pages;
    })
  }
  
  setHeroesSubscription(){
    this.heroesSubscription = this.heroesServices.heroes.subscribe( heroes => {
      this.heroes = heroes;
    })
  }

  setQueryParams(){
    this.route.queryParams.subscribe((queryParams: Params) => {
      if(queryParams['page']){
        this.page = parseInt(queryParams['page']);
      }
      if(queryParams['query']){
        this.query = queryParams['query'];
      }      
      this.getHeroes();
    })
  }

  getHeroes(){        
    this.heroesServices.getHeroes(this.page, this.query).subscribe(heroes => {      
      if(heroes.length > 0){
        this.heroes = heroes
      }
    })
  }

  showAddHeroEvent(){        
    this.showAddHero = !this.showAddHero;
  }

  ngOnDestroy() {
    this.heroesSubscription?.unsubscribe();
    this.pagesSubscription?.unsubscribe();
  }

}
