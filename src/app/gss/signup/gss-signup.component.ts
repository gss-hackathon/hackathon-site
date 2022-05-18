import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'gss-signup',
  templateUrl: './gss-signup.component.html',
  styleUrls: ['./gss-signup.component.scss']
})
export class GSSSignUpComponent implements OnInit {

  @Output()
  callToActionText: String = "";

  ngOnInit() {
    this.callToActionText = "立即報名";
  }

  openForm() {
    window.open('https://gsskm.gss.com.tw/survey/filloutsurvey/e0553a58d4e4417680b3b4566bb42131', '_blank');
  }
}
