import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'school-signup',
  templateUrl: './school-signup.component.html',
  styleUrls: ['./school-signup.component.scss']
})
export class SchoolSignUpComponent implements OnInit {

  @Output()
  callToActionText: String = "";

  constructor(private router: Router) { }

  ngOnInit() {
    this.callToActionText = "得獎名單公布";
  }

  openForm() {
    this.router.navigateByUrl('/2022/school/award');
  }
}
