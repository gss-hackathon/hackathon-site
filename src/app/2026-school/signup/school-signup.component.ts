import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AwardModel } from './award-model';

@Component({
    selector: 'school-signup',
    templateUrl: './school-signup.component.html',
    styleUrls: ['./school-signup.component.scss']
})
export class School2026SignUpComponent {

    awards: AwardModel[] = [];

    private _jsonURL = 'assets/data/awards_2025.json';

    constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
        this.convertToModels(data);
        });
    }

    getJSON(): Observable<any> {
        return this.http.get(this._jsonURL);
    }

    convertToModels(data: any) {
        for (let index in data) {
            let award = new AwardModel();
            award.prizeId = data[index]['prizeId'];
            award.prizeName = data[index]['prizeName'];
            award.projectName = data[index]['projectName'];
            award.schoolName = data[index]['schoolName'];
            award.url = data[index]['url'];
            this.awards.push(award);
        }
    }

    gotoYT(url: string): void {
        window.open(url);
    }

    openGssWebChat() {
        const width = 950;
        const height = 650;
        window.open('https://cai.gss.com.tw/webchat/index.html?botid=baseinfo', 'HelloGSSWebChat', `width=${width},height=${height},resizable=yes,scrollbars=yes`);
    }

    getTodayMonthDay(): string {
        const today = new Date();
        const formattedMonth = (today.getMonth() + 1).toString().padStart(2, '0');
        const formattedDay = today.getDate().toString().padStart(2, '0');
        return `${formattedMonth}/${formattedDay}`;
    }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-signup',
  templateUrl: './school-signup.component.html',
  styleUrls: ['./school-signup.component.scss']
})
export class SchoolSignupComponent implements OnInit {

  // 定義顯示次數的變數
  hitCount: string = '載入中...';

  ngOnInit(): void {
    this.getHitCount();
  }

  getHitCount(): void {
    // 使用免 key、高穩定度且支援跨域的 Counter API
    const API_URL = 'https://api.counterapi.dev/v1/gss-hackathon-site/views/up';

    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        if (data && data.count !== undefined) {
          this.hitCount = data.count.toString();
        }
      })
      .catch(err => {
        console.error('計數器載入失敗:', err);
        this.hitCount = '1';
      });
  }
}
