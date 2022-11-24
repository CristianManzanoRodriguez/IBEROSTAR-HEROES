import { Component, Input } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroFormBuilderService } from '../../services/hero-form-builder.service';

@Component({
  selector: 'app-hero-form-template',
  templateUrl: './hero-form-template.component.html',
  styleUrls: ['./hero-form-template.component.css']
})
export class HeroFormTemplateComponent{

  @Input() public heroForm = this.heroFormBuilder.heroForm;
  @Input() public hero?: Hero;
  constructor(private heroFormBuilder: HeroFormBuilderService){}

}
