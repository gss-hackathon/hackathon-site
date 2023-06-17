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

  isOpenRecord: boolean = false;

  startDate: Date = new Date('2023-06-19 00:00:00');

  private _jsonURL = 'assets/data/awards.json';

  @Output()
  callToActionText: String = "";

  constructor(private router: Router, private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.convertToModels(data);
    });
  }

  ngOnInit() {
    this.isOpenRecord = (new Date() > this.startDate) ? true : false;
    this.callToActionText = this.isOpenRecord ? "查看隊伍列表" : "報名已截止";
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
      award.url = data[index]['url'];
      this.awards.push(award);
    }
  }

  openForm() {
    if (this.isOpenRecord){
      this.router.navigateByUrl('/2023/school/record');
    }
  }
}
