import { Component, AfterContentInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-enfant',

  template: `
    <div>Avant la projection</div>

    <ng-content></ng-content>

    <div>Après la projection</div>
  `
})
export class EnfantComponent implements AfterContentInit {
  constructor() {}

  @ContentChild('ref', { static: true })
  private maRef!: HTMLDivElement;

  ngAfterContentInit() {
    console.log(this.maRef);
  }
}
