import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-pagination',
  templateUrl: './heroes-pagination.component.html',
  styleUrls: ['./heroes-pagination.component.css'],
})
export class HeroesPaginationComponent implements OnInit {
  
  @Input() pages?: number = 1;
  
  public query: string = '';
  public querySubscription?: Subscription;
  
  public page: number = 1;
  public pageSubscription?: Subscription;
  
  public totalPages: number = 0;

  constructor(
    private heroesServices: HeroesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setQuery();
    this.setPage();
    this.setQueryParams();
  }

  setQueryParams(){
    this.route.queryParams.subscribe((queryParams: Params) => {
      if(queryParams['page']){
        this.page = parseInt(queryParams['page']);
      }
      if(queryParams['query']){
        this.query = queryParams['query'];
      }      
    })
  }

  setPage(){
    this.pageSubscription = this.heroesServices.page.subscribe(page => {      
      this.page = page
    })
  }

  setQuery(){
    this.querySubscription = this.heroesServices.query.subscribe(query => {
      this.query = query;
    })
  }

  nextPage() {
    this.page = this.page + 1;
    this.getHeroes()    
  }

  prevPage() {
    this.page = this.page - 1;
    this.getHeroes()
  }

  getHeroes(){
    this.heroesServices.getHeroes(this.page, this.query).subscribe(heroes => {
      this.heroesServices.heroes.emit(heroes)
      this.setUrl()
    })
  }

  setUrl(){    
    if (window?.history?.pushState) {
      var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?page='+ this.page + '&query='+this.query;
      window.history.pushState({path:newurl},'',newurl);
      window.scrollTo(0, 0);
    }
  }
}
