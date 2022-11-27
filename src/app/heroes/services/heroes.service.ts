import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  public heroes = new EventEmitter<Hero[]>()
  public query = new EventEmitter<string>();
  public page = new EventEmitter<number>();
  
  public pages = new EventEmitter<number>();

  constructor(private http: HttpClient) { }

  getHeroes(page: number, query: string = ''): Observable<Hero[]>{
        
    const url = `/api/heroes?_page=${page}&_limit=12&_sort=id&_order=desc&name_like=${query}`
    return this.http.get<Hero[]>(url, {observe: 'response'})
            .pipe(
              map( resp => {
                this.setNumberOfPages(Number(resp.headers.get('x-total-count')))
                return resp.body!
              })
            )
  }

  addHeroe(hero: Hero): Observable<Hero>{
    const url = "/api/heroes"
    return this.http.post<Hero>(url, hero)
  }

  deleteHero(heroId: number): Observable<any>{
    return this.http.delete<any>('/api/heroes/'+heroId)
  }

  updateHero(heroId: number, hero: Hero): Observable<any>{

    return this.http.patch<any>('/api/heroes/'+heroId, hero)
  }

  setNumberOfPages(totalHeroesCount: number){
    this.pages.emit(Math.ceil(totalHeroesCount / 12))
  }
  

}
