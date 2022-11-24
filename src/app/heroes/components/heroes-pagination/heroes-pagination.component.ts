import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-pagination',
  templateUrl: './heroes-pagination.component.html',
  styleUrls: ['./heroes-pagination.component.css'],
})
export class HeroesPaginationComponent implements OnInit {
  
  @Input() public page: number = 1;
  @Input() public query: string = '';
  
  public totalHeroesCount?: number = 0;
  public totalHeroesCountSubscription?: Subscription;
  public totalPages: number = 0;

  constructor(
    private router: Router,
    private heroesServices: HeroesService
  ) {}

  ngOnInit(): void {
    this.totalHeroesCount = this.heroesServices.totalHeroesCount

    this.setTotalPages();
  }

  setTotalPages() {
    if (this.totalHeroesCount) {
      this.totalPages = Math.max(
        1,
        Math.round(this.totalHeroesCount / 12)
      );
    }
  }

  nextPage() {
    this.page = this.page + 1;
    this.navigateToPage();
  }

  prevPage() {
    this.page = this.page - 1;
    this.navigateToPage();
  }

  navigateToPage() {
    let queryParams = { page: 1, query: '' };
    queryParams.page = this.page;
    queryParams.query = this.query;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/heroes/list'], { queryParams: queryParams });
  }
}
