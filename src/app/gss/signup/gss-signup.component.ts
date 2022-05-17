import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'gss-signup',
  templateUrl: './gss-signup.component.html',
  styleUrls: ['./gss-signup.component.scss']
})
export class GSSSignUpComponent implements OnInit {

  isOpenSignUp: boolean = false;

  startDate: Date = new Date('2022-05-18 15:00:00');

  @Output()
  callToActionText: String = "";

  ngOnInit() {
    this.isOpenSignUp = (new Date() > this.startDate) ? true : false;
    this.callToActionText = this.isOpenSignUp ? "立即報名" : "即將開放報名";
  }

  openForm() {
    if (this.isOpenSignUp) {
      window.open('https://gsskm.gss.com.tw/survey/filloutsurvey/1cbc93e60f914189b02bfc8b203a2e12', '_blank');
    }
  }
}
