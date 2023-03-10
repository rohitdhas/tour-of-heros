import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/service/hero.service';
import { IHero } from 'src/app/mock-data/heros';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  topHeros: IHero[] = []

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.topHeros =  this.heroService.getTopHeros();
  }
}
