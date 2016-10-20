import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Festival } from './festival';
import { FestivalService } from './festival.service';


@Component({
  selector: 'my-festivals',
  template: `
    <h2>My Festivals</h2>
    <ul class="festivals">
      <li *ngFor="let festival of festivals"
        [class.selected]="festival === selectedFestival"
        (click)="onSelect(festival)">
        <span class="badge">{{festival.id}}</span> {{festival.name}}
      </li>
    </ul>
    <my-festival-detail [festival]="selectedFestival"></my-festival-detail>
    `,
    styles: [`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .festivals {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .festivals li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .festivals li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .festivals li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .festivals .text {
        position: relative;
        top: -3px;
      }
      .festivals .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
    `],
    providers: [FestivalService]
  })

  export class FestivalsComponent implements OnInit{
    title = 'Tour of Festivals';
    festivals: Festival[];
    selectedFestival: Festival;

    constructor(private festivalService: FestivalService) { }

    getFestivals(): void {
      this.festivalService.getFestivals().then(festivals => this.festivals = festivals);
    }

    ngOnInit(): void {
      this.getFestivals();
    }

    onSelect(festival: Festival): void {
      this.selectedFestival = festival;
    }
  }
