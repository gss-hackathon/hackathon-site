import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'; // 解決 Cannot find name 'Observable'
import { AwardModel } from './award-model'; // 解決 Cannot find name 'AwardModel'

@Component({
  selector: 'school-signup',
  templateUrl: './school-signup.component.html',
  styleUrls: ['./school-signup.component.scss']
})
export class School2026SignUpComponent implements OnInit {

  awards: AwardModel[] = [];
  hitCount: string = '載入中...';
  recordLinkCount: string = '0';

  private _jsonURL = 'assets/data/awards_2025.json';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getJSON().subscribe(data => {
      this.convertToModels(data);
    });

    this.getHitCount();
    this.getRecordLinkCount();
  }

  // 取得整頁瀏覽次數
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

  // 初始化讀取「統問統答」連結點擊數
  getRecordLinkCount(): void {
    const API_URL = 'https://api.counterapi.dev/v1/gss-hackathon-site/record-link';
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        if (data && data.count !== undefined) {
          this.recordLinkCount = data.count.toString();
        }
      })
      .catch(() => {
        this.recordLinkCount = '0';
      });
  }

  // 點擊「統問統答」連結時觸發計數加一
  onRecordLinkClick(): void {
    const API_URL = 'https://api.counterapi.dev/v1/gss-hackathon-site/record-link/up';
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        if (data && data.count !== undefined) {
          this.recordLinkCount = data.count.toString();
        }
      })
      .catch(err => {
        console.error('更新連結點擊數失敗:', err);
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
