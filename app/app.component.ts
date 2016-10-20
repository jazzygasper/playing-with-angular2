import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-festivals></my-festivals>
  `
})
export class AppComponent {
  title = 'Tour of Festivals';
}
