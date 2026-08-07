import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AwardModel } from './award-model';

@Component({
  selector: 'school-signup',
  templateUrl: './school-signup.component.html',
  styleUrls: ['./school-signup.component.scss']
})
export class School2026SignUpComponent implements OnInit {

  awards: AwardModel[] = [];
  hitCount: string = '載入中...';

  private _jsonURL = 'assets/data/awards_2025.json';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // 初始化載入獎項資料與點擊計數器
    this.getJSON().subscribe(data => {
      this.convertToModels(data);
    });

    this.getHitCount();
  }

  // 取得頁面點擊計數
  getHitCount(): void {
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

  getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  convertToModels(data: any): void {
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

  openGssWebChat(): void {
    const width = 950;
    const height = 650;
    window.open(
      'https://cai.gss.com.tw/webchat/index.html?botid=baseinfo',
      'HelloGSSWebChat',
      `width=${width},height=${height},resizable=yes,scrollbars=yes`
    );
  }

  getTodayMonthDay(): string {
    const today = new Date();
    const formattedMonth = (today.getMonth() + 1).toString().padStart(2, '0');
    const formattedDay = today.getDate().toString().padStart(2, '0');
    return `${formattedMonth}/${formattedDay}`;
  }
}
