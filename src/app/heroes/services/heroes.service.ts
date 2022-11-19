import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  public heroes: Hero[] = [];

  constructor(private http: HttpClient) { }

  getHeroes(page: number, limit: number): Observable<Hero[]>{
    const url = `/api/heroes?_page=${page}&_limit=${limit}`
    return this.http.get<Hero[]>(url)
  }

}
