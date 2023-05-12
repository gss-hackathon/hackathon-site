import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AwardModel } from './award-model';

@Component({
  selector: 'school-signup',
  templateUrl: './school-signup.component.html',
  styleUrls: ['./school-signup.component.scss']
})
export class School2023SignUpComponent implements OnInit {

  awards: AwardModel[] = [];

  isOpenSignUp: boolean = false;

  startDate: Date = new Date('2023-05-02 00:00:00');

  private _jsonURL = 'assets/data/awards.json';

  @Output()
  callToActionText: String = "";

  constructor(private router: Router, private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.convertToModels(data);
    });
  }

  ngOnInit() {
    this.isOpenSignUp = (new Date() > this.startDate) ? true : false;
    this.callToActionText = this.isOpenSignUp ? "立即報名" : "即將開放報名";
  }

  getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  convertToModels(data: any) {
    for (let index in data) {
      let award = new AwardModel();
      award.prizeId = data[index]['prizeId'];
      award.prizeName = data[index]['prizeName'];
      award.teamName = data[index]['teamName'];
      award.botName = data[index]['botName'];
      this.awards.push(award);
    }
    console.log(this.awards);
  }

  openForm() {
    if (this.isOpenSignUp) {
      // this.router.navigateByUrl('/2022/school/award');
      window.open('https://forms.gle/zBahCFvdDP9Yoa1N8', '_blank');
    }
  }
}
