import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { AwardModel } from './award-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'gss-award',
  templateUrl: './gss-award.component.html',
  styleUrls: ['./gss-award.component.scss']
})
export class GssAwardComponent implements OnInit {

  awards: AwardModel[] = [];

  heroImagePath: string = 'assets/images/gss_banner.jpg';

  private _jsonURL = 'assets/data/gss_awards.json';

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
      award.teamName = data[index]['teamName'];
      award.botName = data[index]['botName'];
      this.awards.push(award);
    }

  }

  @HostListener('window:resize', ['$event'])
    protected onResize() {
      let width = window.innerWidth;
      if (width <= 576) {
        this.heroImagePath = 'assets/images/gss_banner_min.jpg';
      } else {
        this.heroImagePath = 'assets/images/gss_banner.jpg';
      }
    }

  ngOnInit(): void {
    this.onResize();
  }

}
