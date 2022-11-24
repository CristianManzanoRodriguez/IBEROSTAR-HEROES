import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Biography, Connections, Hero, Powerstats } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroFormBuilderService {

  constructor(private formBuilder: FormBuilder){}

  public heroForm = this.formBuilder.nonNullable.group({
      name: ['', Validators.required],
      biography: this.formBuilder.nonNullable.group({
        alignment: ['', Validators.required],
      }),
      images: this.formBuilder.nonNullable.group({
        sm: ['', Validators.required]
      }),
      powerstats: this.formBuilder.nonNullable.group({
        intelligence: [0, [Validators.required, Validators.min(0) ,Validators.max(100), Validators.maxLength(3)]],
        strength:     [0, [Validators.required, Validators.min(0) ,Validators.max(100), Validators.maxLength(3)]],
        speed:        [0, [Validators.required, Validators.min(0) ,Validators.max(100), Validators.maxLength(3)]],
        durability:   [0, [Validators.required, Validators.min(0) ,Validators.max(100), Validators.maxLength(3)]],
        power:        [0, [Validators.required, Validators.min(0) ,Validators.max(100), Validators.maxLength(3)]],
        combat:       [0, [Validators.required, Validators.min(0) ,Validators.max(100), Validators.maxLength(3)]]
      }),
      connections: this.formBuilder.nonNullable.group({
        groupAffiliation: ['', Validators.required]
      }),
    })

    setFormValue(hero: Hero){
      this.heroForm.patchValue({
        name: hero?.name,
        biography: {
          alignment: hero?.biography?.alignment,
        },
        images: {
          sm: hero?.images?.sm
        },
        powerstats: {
          intelligence: hero?.powerstats?.intelligence,
          strength:     hero?.powerstats?.strength,
          speed:        hero?.powerstats?.speed,
          durability:   hero?.powerstats?.durability,
          power:        hero?.powerstats?.power,
          combat:       hero?.powerstats?.combat,
        },
        connections: {
          groupAffiliation: hero?.connections?.groupAffiliation
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
        
      return heroData
    }
    
}
