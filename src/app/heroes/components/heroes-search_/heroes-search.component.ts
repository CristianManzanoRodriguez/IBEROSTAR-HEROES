import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, switchMap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-search',
  templateUrl: './heroes-search.component.html',
  styleUrls: ['./heroes-search.component.css']
})
export class HeroesSearchComponent implements OnInit{

  @Input() public query: string = '';
  public page: number = 1;

  public searchForm = this.formBuilder.nonNullable.group({
    query: ['']
  })

  constructor(
    private formBuilder: FormBuilder,
    private heroService: HeroesService,
  ){}

  ngOnInit(): void {
    this.searchForm.patchValue({
      query: this.query
    })

    this.searchForm.valueChanges.pipe(
      debounceTime(400),
      switchMap(query => 
        this.heroService.getHeroes(1, query.query)
      )
    ).subscribe(heroes => {
      this.setUrl()
      this.heroService.heroes.emit(heroes)
    })
  }

  setUrl(){    
    if (window?.history?.pushState) {
      var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?page=1&' + 'query='+this.searchForm.get('query')?.value;
      window.history.pushState({path:newurl},'',newurl);
    }
  }
  
  
  clearFilterHeroes(){
    this.searchForm.patchValue({
      query: ''
    })
  }

}
