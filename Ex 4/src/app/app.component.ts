import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <label for="name">Name:</label>
    <input id="name" [(ngModel)]="name" placeholder="Enter your name">
    <p>Hello, {{name}}!</p>
    <label for="age">Age:</label>
    <input id="age" type="number" [(ngModel)]="age">
    <p>You are {{age}} years old.</p>
    <button (click)="onClick()">Click me!</button>
    <p *ngIf="clicked">Button clicked!</p>
    <a routerLink="/new-screen">Go to new screen</a>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
  name = '';
  age = '';
  clicked = false;

  onClick() {
    this.clicked = true;
  }
}
