import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeSelected: EventEmitter<number>//nombre evento q escucha el padre

  constructor(private router: Router) {
    this.heroeSelected = new EventEmitter();
  }

  ngOnInit() {
  }
  verHeroe() {
    this.router.navigate(['/heroe', this.index]);
    //this.heroeSelected.emit(this.index);
  }

}
