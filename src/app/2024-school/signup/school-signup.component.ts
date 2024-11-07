import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AwardModel } from './award-model';

@Component({
    selector: 'school-signup',
    templateUrl: './school-signup.component.html',
    styleUrls: ['./school-signup.component.scss']
})
export class School2024SignUpComponent {

    awards: AwardModel[] = [];

    private _jsonURL = 'assets/data/awards_2024.json';

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
            award.url = data[index]['url'];
            this.awards.push(award);
        }
    }

    gotoYT(url: string): void {
        window.open(url);
    }
}
