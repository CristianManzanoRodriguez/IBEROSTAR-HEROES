import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-search',
  templateUrl: './heroes-search.component.html',
  styleUrls: ['./heroes-search.component.css']
})
export class HeroesSearchComponent implements OnInit{

  @Input() public query: string = '';
  public page: number = 1;

  @Output() public queryChange = new EventEmitter<string>();

  public searchForm = this.formBuilder.nonNullable.group({
    query: ['']
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.searchForm.patchValue({
      query: this.query
    })
  }
  
  clearFilterHeroes(){
    this.searchForm.patchValue({
      query: ''
    })    
    this.filterHeroes()
  }

  filterHeroes(){

    this.query = this.searchForm.controls['query'].value;
    this.queryChange.emit('')
    
    this.navigateToPage()
    
  }

  navigateToPage(){
    let queryParams = {page: 1, query: ''};
    queryParams.page = this.page
    queryParams.query = this.query
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/heroes/list'], {queryParams: queryParams});
  }

}
