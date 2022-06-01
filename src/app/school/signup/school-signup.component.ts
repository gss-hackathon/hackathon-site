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
    this.callToActionText = "報名已截止";
  }

  openForm() {
    return;
  }
}
