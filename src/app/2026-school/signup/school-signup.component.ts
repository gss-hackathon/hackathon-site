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

  // 替換連字號為底線，符合 API 命名規範
  private apiNamespace = 'gss_hackathon_site_2026';

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getJSON().subscribe(data => {
      this.convertToModels(data);
    });

    this.getHitCount();
    this.getRecordLinkCount();
  }

  // 1. 取得全頁瀏覽次數 (累加 +1)
  getHitCount(): void {
    const url = `https://api.counterapi.dev/v1/${this.apiNamespace}/page_views/up`;
    this.http.get<any>(url).subscribe({
      next: (data) => {
        if (data && data.count !== undefined) {
          this.hitCount = data.count.toString();
          this.cdr.detectChanges(); // 強制更新 Angular 視圖
        }
      },
      error: (err) => {
        console.error('頁面計數失敗:', err);
        this.hitCount = '1';
        this.cdr.detectChanges();
      }
    });
  }

  // 2. 初始化讀取「統問統答」連結點擊數 (僅讀取，不累加)
  getRecordLinkCount(): void {
    const url = `https://api.counterapi.dev/v1/${this.apiNamespace}/record_link`;
    this.http.get<any>(url).subscribe({
      next: (data) => {
        if (data && data.count !== undefined) {
          this.recordLinkCount = data.count.toString();
          this.cdr.detectChanges();
        }
      },
      error: () => {
        // 若該 key 尚未建立，呼叫一次 /up 進行初始化
        this.initRecordLinkCounter();
      }
    });
  }

  // 3. 首次建立連結計數器
  private initRecordLinkCounter(): void {
    const url = `https://api.counterapi.dev/v1/${this.apiNamespace}/record_link/up`;
    this.http.get<any>(url).subscribe({
      next: (data) => {
        if (data && data.count !== undefined) {
          this.recordLinkCount = data.count.toString();
          this.cdr.detectChanges();
        }
      },
      error: () => {
        this.recordLinkCount = '0';
        this.cdr.detectChanges();
      }
    });
  }

  // 4. 點擊「統問統答」連結時觸發累加
  onRecordLinkClick(): void {
    const url = `https://api.counterapi.dev/v1/${this.apiNamespace}/record_link/up`;
    this.http.get<any>(url).subscribe({
      next: (data) => {
        if (data && data.count !== undefined) {
          this.recordLinkCount = data.count.toString();
          this.cdr.detectChanges();
        }
      },
      error: (err) => {
        console.error('更新點擊數失敗:', err);
      }
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
