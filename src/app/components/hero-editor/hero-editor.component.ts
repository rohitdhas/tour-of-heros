import { Component, OnInit } from '@angular/core';
import { IHero } from 'src/app/mock-data/heros';
import { HeroService } from 'src/app/service/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-editor',
  templateUrl: './hero-editor.component.html',
  styleUrls: ['./hero-editor.component.css']
})
export class HeroEditorComponent implements OnInit {
  currentHero: IHero | undefined;

  constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.currentHero = this.heroService.getHeroById(parseInt(id));
    });
  }

  updateHero($event: Event): void {
    const input = ($event.target as HTMLInputElement).value;
    if (this.currentHero && input) {
      this.currentHero.name = input;
    }
  }

  goBack($event: Event) {
    $event.preventDefault();
    this.location.back();
  }
}
