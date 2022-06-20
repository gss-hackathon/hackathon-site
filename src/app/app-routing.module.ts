import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GSSSignUpComponent } from './gss/signup/gss-signup.component';
import { SchoolSignUpComponent } from './school/signup/school-signup.component';
import { SchoolSignupRecordComponent } from './school/signup-record/school-signup-record.component';
import { GssSignupRecordComponent } from './gss/signup-record/gss-signup-record.component';

const routes: Routes = [
  { path: '', redirectTo: '/2022/school', pathMatch: 'full' },
  {
      path: '2022',
      children: [
          { path: '', redirectTo: 'school', pathMatch: 'full' },
          { path: 'school', component: SchoolSignUpComponent },
          { path: 'school/record', component: SchoolSignupRecordComponent },
          { path: 'gss', component: GSSSignUpComponent },
          { path: 'gss/record', component: GssSignupRecordComponent },
          { path: '**', redirectTo: '/2022/school', pathMatch: 'full' },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
