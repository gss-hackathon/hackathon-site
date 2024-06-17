import { Component, Input } from '@angular/core';

@Component({
  selector: 'c-method-n',
  styleUrls: ['./competition-method-new.component.scss'],
  template: `
    <h2 class="item-title">
      <img alt="項目圖案" src="assets/images/{{ icon }}.png" />
      <span>{{ methodSubject }}</span>
    </h2>
    <ng-content></ng-content>
  `
})
export class CompetitionMethodNewComponent {

  @Input()
  methodSubject: string = '';

  @Input()
  icon: string = '';
}
