import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/2022/school', pathMatch: 'full' },
  {
      path: '2022',
      children: [
          { path: '', redirectTo: 'school', pathMatch: 'full' },
          { path: 'school', component: HomeComponent },
          { path: '**', redirectTo: '/2022/school', pathMatch: 'full' },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
