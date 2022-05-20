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
    window.open('https://gsskm.gss.com.tw/survey/a/b7f6eb11-bab3-44a6-af9c-b3af4d72037c', '_blank');
  }
}
