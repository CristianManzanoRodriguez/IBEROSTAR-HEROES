import { Component, Input } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent {

  @Input() public hero!: Hero;

  editHero(){
    console.log(this.hero.id);
    
  }

  showDeleteWarnPopUp(){
    console.log("SHOW POPUP: ", true);
    
  }
}
