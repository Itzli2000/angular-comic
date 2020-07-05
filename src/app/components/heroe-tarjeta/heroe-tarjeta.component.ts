import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  @Output() selectedHeroe: EventEmitter<number>;

  constructor(
    private router: Router
  ) {
    this.selectedHeroe = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe = () => {
    this.selectedHeroe.emit( this.index );
  }

}
