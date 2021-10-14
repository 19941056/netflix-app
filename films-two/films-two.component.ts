import { Component,Input, OnInit } from '@angular/core';
import { FilmsTwo } from '../models/netflix-model';
@Component({
  selector: 'app-films-two',
  templateUrl: './films-two.component.html',
  styleUrls: ['./films-two.component.scss']
})
export class FilmsTwoComponent implements OnInit {
  @Input() public filmsTwo!:FilmsTwo;
  constructor() { }

  ngOnInit(): void {
  }

}
