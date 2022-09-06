import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { AwardModel } from './award-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'school-award',
  templateUrl: './school-award.component.html',
  styleUrls: ['./school-award.component.scss']
})
export class SchoolAwardComponent implements OnInit {

  awards: AwardModel[] = [];

  heroImagePath: string = 'assets/images/school_banner.jpg';

  private _jsonURL = 'assets/data/awards.json';

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
        this.heroImagePath = 'assets/images/school_banner_min.jpg';
      } else {
        this.heroImagePath = 'assets/images/school_banner.jpg';
      }
    }

  ngOnInit(): void {
    this.onResize();
  }

}
