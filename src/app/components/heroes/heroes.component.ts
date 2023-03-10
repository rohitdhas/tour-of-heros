import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/service/hero.service';
import { IHero } from 'src/app/mock-data/heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heros: IHero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heros = this.heroService.getAllHeros();  
  }
}
