import { Component, Input } from '@angular/core';

@Component({
  selector: 'c-method',
  styleUrls: ['./competition-method.component.scss'],
  template: `
    <h2 class="item-title">
      <img alt="項目圖案" src="assets/images/{{ icon }}.png" />
      {{ methodSubject }}
    </h2>
    <ng-content></ng-content>
  `
})
export class CompetitionMethodComponent {

  @Input()
  methodSubject: string = '';

  @Input()
  icon: string = '';
}
