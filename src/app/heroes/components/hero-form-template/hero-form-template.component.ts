import { Component, Input, OnInit } from '@angular/core';
import { HeroFormBuilderService } from '../../services/hero-form-builder.service';

@Component({
  selector: 'app-hero-form-template',
  templateUrl: './hero-form-template.component.html',
  styleUrls: ['./hero-form-template.component.css']
})
export class HeroFormTemplateComponent{

  @Input() public heroForm = this.heroFormBuilder.heroForm;

  constructor(private heroFormBuilder: HeroFormBuilderService){}

}
