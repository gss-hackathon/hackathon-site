import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionMethodComponent } from './competition-method/competition-method.component';
import { FooterComponent } from './footer/footer.component';
import { GSSSignUpComponent } from './gss/signup/gss-signup.component';
import { SchoolSignUpComponent } from './school/signup/school-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolSignUpComponent,
    GSSSignUpComponent,
    CompetitionMethodComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
