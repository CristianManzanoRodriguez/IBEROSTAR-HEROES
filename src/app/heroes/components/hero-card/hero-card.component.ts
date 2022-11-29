import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hero } from '../../models/hero';
import { HeroFormBuilderService } from '../../services/hero-form-builder.service';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit{

  
  @Input() public hero!: Hero;
  @Input() public heroes!: Hero[];

  public showDeletePopUp: boolean = false;

  public editPopupShowed: string = '';

  public editHeroShowedSubscription?: Subscription;

  constructor(private heroFormBuilder: HeroFormBuilderService){}

  ngOnInit(){
    this.editHeroShowedSubscription = this.heroFormBuilder.editHeroShowed.subscribe( editPopupShowed => {
      this.editPopupShowed = editPopupShowed;
    })
  }

  showEditForm(){
    this.editPopupShowed = 'editHero'+this.hero.id
    this.heroFormBuilder.editHeroShowed.emit(this.editPopupShowed);
    
  }

  showDeleteWarnPopUp(){
    this.showDeletePopUp = !this.showDeletePopUp;
    
  }
}
