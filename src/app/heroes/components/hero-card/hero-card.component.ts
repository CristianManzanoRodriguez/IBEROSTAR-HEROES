import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent {

  
  @Input() public hero!: Hero;
  @Input() public heroes!: Hero[];

  public showDeletePopUp: boolean = false;

  editHero(){
    console.log(this.hero.id);
    
  }

  showDeleteWarnPopUp(){
    this.showDeletePopUp = true;
    
  }
}
