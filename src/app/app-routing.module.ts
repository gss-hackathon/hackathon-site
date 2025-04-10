import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GSSSignUpComponent } from './gss/signup/gss-signup.component';
import { SchoolSignUpComponent } from './school/signup/school-signup.component';
import { SchoolSignupRecordComponent } from './school/signup-record/school-signup-record.component';
import { GssSignupRecordComponent } from './gss/signup-record/gss-signup-record.component';
import { SchoolAwardComponent } from './school/award/school-award.component';
import { School2023AwardComponent } from './2023-school/award/school-award.component';
import { GssAwardComponent } from './gss/award/gss-award.component';
import { School2023SignUpComponent } from './2023-school/signup/school-signup.component';
import { School2023SignupRecordComponent } from './2023-school/signup-record/school-signup-record.component';
import { School2024SignUpComponent } from './2024-school/signup/school-signup.component';
import { School2025SignUpComponent } from './2025-school/signup/school-signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/2025/innoserve', pathMatch: 'full' },
  {
      path: '2022',
      children: [
          { path: '', redirectTo: 'school', pathMatch: 'full' },
          { path: 'school', component: SchoolSignUpComponent },
          { path: 'school/record', component: SchoolSignupRecordComponent },
          { path: 'school/award', component: SchoolAwardComponent },
          { path: 'gss', component: GSSSignUpComponent },
          { path: 'gss/record', component: GssSignupRecordComponent },
          { path: 'gss/award', component: GssAwardComponent },
          { path: '**', redirectTo: '/2022/school', pathMatch: 'full' },
      ]
  },
  {
      path: '2023',
      children: [
          { path: '', redirectTo: 'school', pathMatch: 'full' },
          { path: 'school', component: School2023SignUpComponent },
          { path: 'school/record', component: School2023SignupRecordComponent },
          { path: 'school/award', component: School2023AwardComponent },
          { path: '**', redirectTo: '/2023/school', pathMatch: 'full' },
      ]
  },
  {
    path: '2024',
    children: [
        { path: '', redirectTo: 'innoserve', pathMatch: 'full' },
        { path: 'innoserve', component: School2024SignUpComponent },
        { path: '**', redirectTo: '/2024/innoserve', pathMatch: 'full' },
    ]
  },
  {
    path: '2025',
    children: [
        { path: '', redirectTo: 'innoserve', pathMatch: 'full' },
        { path: 'innoserve', component: School2025SignUpComponent },
        { path: '**', redirectTo: '/2025/innoserve', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
