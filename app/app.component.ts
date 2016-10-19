import { Component } from '@angular/core';

export class Festival {
  id: number;
  name: string;
};

@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1>   <h2>{{festival.name}} details!</h2>   <div><label>id: </label>{{festival.id}}</div>   <div><label>name: </label><input value="{{festival.name}}" placeholder="name"></div>'
})

export class AppComponent {
  title = 'Tour of Festivals';
  festival: Festival = {
    id: 1,
    name: 'Glatonbury'
  };
}
