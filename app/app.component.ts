import { Component } from '@angular/core';

export class Festival {
  id: number;
  name: string;
}

const FESTIVAL: Festival[] = [
  { id: 11, name: 'Boomtown' },
  { id: 12, name: 'Shambala' },
  { id: 13, name: 'Green Man' },
  { id: 14, name: 'Secret Garden Party' },
  { id: 15, name: 'Bestival' },
  { id: 16, name: 'The Masked Ball' },
  { id: 17, name: 'Gottwood' },
  { id: 18, name: 'Burning Man' },
  { id: 19, name: 'Creamfields' },
  { id: 20, name: 'The Social' }
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Festivals</h2>
    <ul class="festivals">
      <li *ngFor="let festival of festivals"
        [class.selected]="festival === selectedFestival"
        (click)="onSelect(festival)">
        <span class="badge">{{festival.id}}</span> {{festival.name}}
      </li>
    </ul>
    <div *ngIf="selectedFestival">
      <h2>{{selectedFestival.name}} details!</h2>
      <div><label>id: </label>{{selectedFestival.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedFestival.name" placeholder="name"/>
      </div>
    </div>
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
    `]
  })

  export class AppComponent {
    title = 'Tour of Festivals';
    festivals = FESTIVAL;
    selectedFestival: Festival;

    onSelect(festival: Festival): void {
      this.selectedFestival = festival;
    }
  }
