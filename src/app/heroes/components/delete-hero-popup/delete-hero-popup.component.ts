import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from '../../models/hero';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-delete-hero-popup',
  templateUrl: './delete-hero-popup.component.html',
  styleUrls: ['./delete-hero-popup.component.css']
})
export class DeleteHeroPopupComponent {

  @Input() public hero?: Hero;
  @Input() public heroes!: Hero[];

  @Output() public showDeletePopUpChange = new EventEmitter<boolean>()

  constructor(
    private herosServices: HeroesService,
    private route: ActivatedRoute,
  ){}

  closeDeletePopUp(){    
    this.showDeletePopUpChange.emit(false)
  }

  deleteHero(){
    if(this.hero?.id){
      this.herosServices.deleteHero(this.hero.id).subscribe(resp => {
        this.setHeroesList()
      })
    }
  }

  setHeroesList(){
    this.heroes = this.heroes.filter(hero => hero.id != this.hero?.id)
    this.herosServices.heroes.emit(this.heroes)
    this.showDeletePopUpChange.emit(false)
  }

}
