import { HeroesService } from './../../services/heroes.service';
import { Component } from '@angular/core';
import { Heroe } from 'src/app/models/heroe.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  heroes: Heroe[] = [];
  termino: string;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe( params => {
      const name = 'name';
      if (params[name]) {
        this.termino = params[name];
        const searchParam = params[name];
        this.heroes = this.heroesService.buscarHeroes(searchParam);
        console.log(this.heroes);
      }
    });
  }

  verHeroe = (index: number) => {
    this.router.navigate(['/heroe', index]);
  }

}
