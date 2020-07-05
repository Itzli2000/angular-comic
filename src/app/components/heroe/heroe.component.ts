import { HeroesService } from './../../services/heroes.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/models/heroe.model';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: Heroe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService,
  ) {
    this.activatedRoute.params.subscribe( params => {
      const searchParam = 'id';
      this.heroe = heroeService.getHeroe(params[searchParam]);
    });
  }

}
