import { Component } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  heroe: any = {}

  constructor(private heroesService: HeroesService, private router: Router) { }

  buscarHeroe(termino: string) {
    //const heroe = this.heroesService.searchHeroes(termino);
    //console.log(heroe.nombre);
    //let nameHeroe = heroe.nombre;
    if ( termino ) {
      this.router.navigate(['/buscador',termino]);
    }
  }
}
