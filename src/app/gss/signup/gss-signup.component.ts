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
    this.callToActionText = "查看隊伍列表";
  }

  openForm() {
    window.open('/2022/gss/record');
  }
}
