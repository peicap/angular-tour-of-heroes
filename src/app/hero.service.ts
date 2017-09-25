import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { Hero } from './hero';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes' // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }
}