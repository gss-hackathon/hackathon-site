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

  private _jsonURL = 'assets/data/awards.json';

  @Output()
  callToActionText: String = "";

  constructor(private router: Router, private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.convertToModels(data);
    });
  }

  ngOnInit() {
    this.callToActionText = this.isOpenRecord ? "查看隊伍列表" : "得獎名單公布";
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
    this.router.navigateByUrl('/2023/school/award');
  }
}
