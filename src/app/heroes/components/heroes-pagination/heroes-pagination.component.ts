import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-heroes-pagination',
  templateUrl: './heroes-pagination.component.html',
  styleUrls: ['./heroes-pagination.component.css'],
})
export class HeroesPaginationComponent implements OnInit{

  @Input() public page: number = 1;
  @Input() public heroesPerPage: number = 12;
  @Input() public totalHeroesCount?: number = 0;
  @Input() public query: string = '';
  
  public totalPages: number = 0;
  public frontUrl: string = environment.frontUrl;

  constructor(
    private router: Router,
  ){}

  ngOnInit(): void {
    this.setTotalPages()
    
  }
  
  setTotalPages(){

    if(this.totalHeroesCount){
      this.totalPages = Math.max(1, (Math.round(this.totalHeroesCount/this.heroesPerPage)))        
    }

  }

  nextPage(){
    this.page = (this.page + 1)
    this.navigateToPage();
  }

  prevPage(){
    this.page = this.page - 1;
    this.navigateToPage();
  }

  navigateToPage(){
    let queryParams = {page: 1, query: ''};
    queryParams.page = this.page
    queryParams.query = this.query
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/heroes/list'], {queryParams: queryParams});
  }

}
