import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-screen',
  template: `
    <h1>{{data}}</h1>
    <app-child [data]="data"></app-child>
  `,
})
export class NewScreenComponent {
  data = 'Hello World!';
}

@Component({
  selector: 'app-child',
  template: `
    <h2>Child Component</h2>
    <p>{{data}}</p>
  `,
})
export class ChildComponent {
  @Input() data?: string;
}
