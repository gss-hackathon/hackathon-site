import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isOpenSignUp: boolean = false;

  @Output()
  callToActionText: String = "";

  ngOnInit() {
    this.isOpenSignUp = true;
    this.callToActionText = this.isOpenSignUp ? "立即報名" : "即將開放報名";
  }
}
