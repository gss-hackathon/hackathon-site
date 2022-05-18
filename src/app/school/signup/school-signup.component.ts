import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'school-signup',
  templateUrl: './school-signup.component.html',
  styleUrls: ['./school-signup.component.scss']
})
export class SchoolSignUpComponent implements OnInit {

  @Output()
  callToActionText: String = "";

  ngOnInit() {
    this.callToActionText = "立即報名";
  }

  openForm() {
    window.open('https://gsskm.gss.com.tw/survey/a/637775f0-b610-41ee-a810-db8fde2b4697', '_blank');
  }
}
