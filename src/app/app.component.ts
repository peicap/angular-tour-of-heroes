import { Component } from '@angular/core';


// This is an objects that has properties
export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  // To use multi-line use backticks ``
  // [(ngModel)] is the Angular syntax to bind the hero.name property to the textbox. Data flows in both directions: from the property to the textbox, and from the textbox back to the property.
  template: `
    <h1>{{title}}</h1>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    <div><label>id: </label>{{hero.id}}</div>
    <div><label>name: </label>{{hero.name}}</div>
  `,
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  // These are angular properties
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}




