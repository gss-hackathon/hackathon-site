import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { TeamModel } from './team-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'school-signup-record',
  templateUrl: './school-signup-record.component.html',
  styleUrls: ['./school-signup-record.component.scss']
})
export class School2023SignupRecordComponent implements OnInit {

  teams: TeamModel[] = [];

  heroImagePath: string = 'assets/images/2023_hackathon_survey-03.jpg';

  private _jsonURL = 'assets/data/teams_2023.json';

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
      let team = new TeamModel();
      team.teamName = data[index]['teamName'];
      team.leaderName = data[index]['leaderName'];
      team.teamMemberCount = data[index]['teamMemberCount'];
      this.teams.push(team);
    }

  }

  @HostListener('window:resize', ['$event'])
    protected onResize() {
      let width = window.innerWidth;
      if (width <= 576) {
        this.heroImagePath = 'assets/images/2023_hackathon_survey-03_min.jpg';
      } else {
        this.heroImagePath = 'assets/images/2023_hackathon_survey-03.jpg';
      }
    }

  ngOnInit(): void {
    this.onResize();
  }

}
