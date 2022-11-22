import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  public heroes = new EventEmitter<Hero[]>()

  constructor(private http: HttpClient) { }

  getHeroes(page: number, limit: number, query: string = ''): Observable<Hero[]>{
        
    const url = `/api/heroes?_page=${page}&_limit=${limit}&_sort=id&_order=desc&name_like=${query}`
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

  deleteHero(heroId: number): Observable<any>{
    return this.http.delete<any>('/api/heroes/'+heroId)
  }

  updateHero(heroId: number, hero: Hero): Observable<any>{
    
    return this.http.patch<any>('/api/heroes/'+heroId, hero)
  }
  

}
