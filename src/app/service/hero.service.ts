import { Injectable } from '@angular/core';
import { IHero, heros } from '../mock-data/heros';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor() { }

  getAllHeros() : IHero[] {
    return heros;
  }

  getTopHeros(): IHero[] {
    const topHeros = heros.filter(hero => hero.isTopHero);
    return topHeros;
  }

  getHeroById(id: number): IHero | undefined {
    const hero = heros.find(h => h.id === id);
    return hero;
  }
}