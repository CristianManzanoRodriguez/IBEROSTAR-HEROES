import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  public heroes: Hero[] = [];

  constructor(private http: HttpClient) { }

  getHeroes(page: number, limit: number, query: string = ''): Observable<Hero[]>{
    const url = `/api/heroes?_page=${page}&_limit=${limit}&name_like=${query}`
    return this.http.get<Hero[]>(url, {observe: 'response'})
            .pipe(
              map( resp => {
                return resp.body!.map( hero => {
                  hero.totalHeroesCount = Number(resp.headers.get('x-total-count'))
                  return hero
                })
              })
            )
  }

}
