import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'gss-signup',
  templateUrl: './gss-signup.component.html',
  styleUrls: ['./gss-signup.component.scss']
})
export class GSSSignUpComponent implements OnInit {

  isOpenSignUp: boolean = false;

  startDate: Date = new Date('2022-05-13 15:00:00');

  @Output()
  callToActionText: String = "";

  ngOnInit() {
    this.isOpenSignUp = (new Date() > this.startDate) ? true : false;
    this.callToActionText = this.isOpenSignUp ? "立即報名" : "即將開放報名";
  }

  openForm() {
    if (this.isOpenSignUp) {
      window.open('https://gsskm.gss.com.tw/survey/a/637775f0-b610-41ee-a810-db8fde2b4697', '_blank');
    }
  }
}
