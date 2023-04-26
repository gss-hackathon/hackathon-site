import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'school-signup',
  templateUrl: './school-signup.component.html',
  styleUrls: ['./school-signup.component.scss']
})
export class School2023SignUpComponent implements OnInit {

  isOpenSignUp: boolean = false;

  startDate: Date = new Date('2023-05-02 00:00:00');

  @Output()
  callToActionText: String = "";

  constructor(private router: Router) { }

  ngOnInit() {
    this.isOpenSignUp = (new Date() > this.startDate) ? true : false;
    this.callToActionText = this.isOpenSignUp ? "立即報名" : "即將開放報名";
  }

  openForm() {
    if (this.isOpenSignUp) {
      // this.router.navigateByUrl('/2022/school/award');
      window.open('https://forms.gle/zBahCFvdDP9Yoa1N8', '_blank');
    }
  }
}
