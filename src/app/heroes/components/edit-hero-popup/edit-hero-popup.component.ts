import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroFormBuilderService } from '../../services/hero-form-builder.service';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-edit-hero-popup',
  templateUrl: './edit-hero-popup.component.html',
  styleUrls: ['./edit-hero-popup.component.css']
})
export class EditHeroPopupComponent implements OnInit{

  @Input() public hero: Hero = new Hero;
  
  @Output() public heroChange = new EventEmitter<Hero>();
  @Output() public showForm = new EventEmitter<boolean>();

  public heroId: number = 0;

  public heroForm = this.heroFormBuilder.heroForm

  constructor(
    private heroesServices: HeroesService,
    private heroFormBuilder: HeroFormBuilderService,
  ){}

  ngOnInit() {    
    if(this.hero){
      this.heroFormBuilder.setFormValue(this.hero)
      this.heroId = Number(this.hero.id);
    }

  }

  setHeroData(){
    let heroData = this.heroFormBuilder.setHeroData()
    this.updateHero(heroData)
    
  }

  updateHero(heroData: Hero){
    if(this.heroForm.valid){
      this.heroesServices.updateHero(this.heroId, heroData).subscribe(hero => {
        this.heroChange.emit(hero)
        this.closeForm()
      })
    } else {
      console.log(this.heroForm.controls.powerstats.controls.combat.errors);
      
      this.heroForm.markAllAsTouched()

    }
  }

  closeForm(){
    this.showForm.next(false)

  }
}
