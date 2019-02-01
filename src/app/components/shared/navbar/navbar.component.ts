import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  heroe: Heroe;

  constructor(private heroesService: HeroesService) { }

  buscarHeroe(termino: string) {
    console.log(this.heroesService.searchHeroes(termino));
  }

}
