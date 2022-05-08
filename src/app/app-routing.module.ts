import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GSSSignUpComponent } from './gss/signup/gss-signup.component';
import { SchoolSignUpComponent } from './school/signup/school-signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/2022/school', pathMatch: 'full' },
  {
      path: '2022',
      children: [
          { path: '', redirectTo: 'school', pathMatch: 'full' },
          { path: 'school', component: SchoolSignUpComponent },
          { path: 'gss', component: GSSSignUpComponent },
          { path: '**', redirectTo: '/2022/school', pathMatch: 'full' },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
