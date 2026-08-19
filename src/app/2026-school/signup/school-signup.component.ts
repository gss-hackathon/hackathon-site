import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  recordLinkCount: string = '0';

  private _jsonURL = 'assets/data/awards_2025.json';

  // ⚠️ 請在此處貼上您部署 Google Apps Script 後取得的「網頁應用程式 URL」
  private GAS_API_URL = 'https://script.google.com/macros/s/AKfycby481HaGG3Fe8rk2qxSKicjRFrJKwDC0DxZ3JqBNSLjxwJL_wNJwm77l24SL54ciZSTKw/exec';

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getJSON().subscribe(data => {
      this.convertToModels(data);
    });

    // 頁面載入時觸發全頁瀏覽數 +1，並同時取得最新的點擊數據
    this.fetchCounters('hit_page');
  }

  // 統一處理數據讀取與累加
  fetchCounters(action: 'get' | 'hit_page' | 'hit_link'): void {
    if (!this.GAS_API_URL || this.GAS_API_URL === 'YOUR_GAS_API_URL_HERE') {
      console.warn('請先設定正確的 GAS_API_URL');
      return;
    }

    const url = `${this.GAS_API_URL}?action=${action}`;
    this.http.get<any>(url).subscribe({
      next: (data) => {
        if (data) {
          if (data.pageViews !== undefined) this.hitCount = data.pageViews.toString();
          if (data.linkViews !== undefined) this.recordLinkCount = data.linkViews.toString();
          this.cdr.detectChanges();
        }
      },
      error: (err) => {
        console.error('取得點擊計數失敗:', err);
      }
    });
  }

  // 點擊「統問統答」連結時觸發累加
  onRecordLinkClick(): void {
    this.fetchCounters('hit_link');
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
