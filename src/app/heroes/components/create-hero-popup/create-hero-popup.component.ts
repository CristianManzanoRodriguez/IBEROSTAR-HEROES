import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroFormBuilderService } from '../../services/hero-form-builder.service';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-create-hero-popup',
  templateUrl: './create-hero-popup.component.html',
  styleUrls: ['./create-hero-popup.component.css']
})
export class CreateHeroPopupComponent implements OnDestroy{
  
  @Output() public heroChange = new EventEmitter<Hero>();
  @Output() public showAddHeroEvent = new EventEmitter<boolean>();
  @Output() public getHeroes = new EventEmitter();

  public heroId: number = 0;

  public heroForm = this.heroFormBuilder.heroForm

  constructor(
    private heroesServices: HeroesService,
    private heroFormBuilder: HeroFormBuilderService,
  ){}

  ngOnDestroy() {
    this.heroForm.reset()
    
  }


  setHeroData(){
    let heroData = this.heroFormBuilder.setHeroData()
    this.addHero(heroData)
    
  }

  addHero(heroData: Hero){
    if(this.heroForm.valid){
      this.heroesServices.addHeroe(heroData).subscribe(hero => {
        this.heroesServices.getHeroes(1).subscribe(heroes => {
          this.heroesServices.heroes.emit(heroes)
          this.closeForm()
        })
      })
    } else {      
      this.heroForm.markAllAsTouched()

    }
  }

  closeForm(){    
    this.showAddHeroEvent.next(false)

  }
}
