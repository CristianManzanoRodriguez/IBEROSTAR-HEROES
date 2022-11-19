import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit{

  public heroes: Hero[] = [];
  public page: number = 10;
  public heroesPerPage: number = 60;

  constructor(
    private heroesServices: HeroesService,
  ){}

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(){
    this.heroesServices.getHeroes(this.page, this.heroesPerPage).subscribe(heroes => {
      this.heroes = heroes      
    })
  }

  nextPage(){
    this.page += 1;
    this.getHeroes()
  }

  prevPage(){
    if(this.page > 1){
      this.page -= 1;
    }
  }

}
