import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Biography, Connections, Hero, Powerstats } from '../../models/hero';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit{

  @Input() public hero: Hero = new Hero;
  
  @Output() public heroChange = new EventEmitter<Hero>();
  @Output() public showForm = new EventEmitter<boolean>();

  public heroId: number = 0;

  public heroForm = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    biography: this.formBuilder.nonNullable.group({
      alignment: ['', Validators.required],
    }),
    images: this.formBuilder.nonNullable.group({
      sm: ['']
    }),
    powerstats: this.formBuilder.nonNullable.group({
      intelligence: ['', [Validators.required, Validators.maxLength(3)]],
      strength:     ['', [Validators.required, Validators.maxLength(3)]],
      speed:        ['', [Validators.required, Validators.maxLength(3)]],
      durability:   ['', [Validators.required, Validators.maxLength(3)]],
      power:        ['', [Validators.required, Validators.maxLength(3)]],
      combat:       ['', [Validators.required, Validators.maxLength(3)]]
    }),
    connections: this.formBuilder.nonNullable.group({
      groupAffiliation: ['', Validators.required]
    }),
  })

  constructor(
    private formBuilder: FormBuilder,
    private heroesServices: HeroesService,
  ){}

  ngOnInit() {
    if(this.hero){
      this.setFormValue()
      this.heroId = Number(this.hero.id);
    }
  }

  setFormValue(){
    this.heroForm.patchValue({
      name: this.hero?.name,
      biography: {
        alignment: this.hero?.biography?.alignment,
      },
      images: {
        sm: this.hero?.images?.sm
      },
      powerstats: {
        intelligence: this.hero?.powerstats?.intelligence?.toString(),
        strength:     this.hero?.powerstats?.strength?.toString(),
        speed:        this.hero?.powerstats?.speed?.toString(),
        durability:   this.hero?.powerstats?.durability?.toString(),
        power:        this.hero?.powerstats?.power?.toString(),
        combat:       this.hero?.powerstats?.combat?.toString(),
      },
      connections: {
        groupAffiliation: this.hero?.connections?.groupAffiliation
      },
    })

  }

  setHeroData(){
    let heroData = new Hero();
    let heroPowerStats = new Powerstats();
    let heroConnections = new Connections();
    let heroBiography = new Biography();
    
    heroData.name = this.heroForm.controls.name.value;
    
    heroPowerStats.combat = Number(this.heroForm.controls.powerstats.controls.combat.value)
    heroPowerStats.durability = Number(this.heroForm.controls.powerstats.controls.durability.value)
    heroPowerStats.intelligence = Number(this.heroForm.controls.powerstats.controls.intelligence.value)
    heroPowerStats.power = Number(this.heroForm.controls.powerstats.controls.power.value)
    heroPowerStats.speed = Number(this.heroForm.controls.powerstats.controls.speed.value)
    heroPowerStats.strength = Number(this.heroForm.controls.powerstats.controls.combat.value)

    heroConnections.groupAffiliation = this.heroForm.controls.connections.controls.groupAffiliation.value;

    heroBiography.alignment = this.heroForm.controls.biography.controls.alignment.value

    heroData.powerstats = heroPowerStats    
    heroData.connections = heroConnections
    heroData.biography = heroBiography;

    this.updateHero(heroData)
    
  }

  updateHero(heroData: Hero){
    this.heroesServices.updateHero(this.heroId, heroData).subscribe(hero => {
      this.heroChange.emit(hero)
      this.closeForm()
    })
  }

  closeForm(){
    this.showForm.next(false)
  }
}
