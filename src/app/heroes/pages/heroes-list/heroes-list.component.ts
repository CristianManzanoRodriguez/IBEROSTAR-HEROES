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
  public heroesPerPage: number = 12;
  public totalHeroesCount?: number = 0;
  public lastPage?: number = 0;
  public query: string = '';
  public loading: boolean = false;

  constructor(
    public heroesServices: HeroesService,
    private route: ActivatedRoute,

  ){}

  ngOnInit() {
    this.getQueryParams()

    this.heroesSubscription = this.heroesServices.heroes.subscribe( heroes => {
      this.heroes = heroes;
    })
  }

  ngOnDestroy() {
    this.heroesSubscription?.unsubscribe()
  }

  getQueryParams(){
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
    this.loading = true;
    
    this.heroesServices.getHeroes(this.page, this.heroesPerPage, this.query).subscribe(heroes => {
      if(heroes.length > 0){
        this.heroes = heroes
        this.totalHeroesCount = heroes[0].totalHeroesCount 
      }
      this.loading = false;
    })
  }

}
