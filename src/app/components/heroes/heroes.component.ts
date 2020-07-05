import { Heroe } from './../../models/heroe.model';
import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[];

  constructor(
    private heroesService: HeroesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

  seeSelectedHeroe = (index: number) => {
    this.router.navigate(['/heroe', index]);
  }

}
