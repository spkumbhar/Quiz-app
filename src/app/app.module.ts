import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}  from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './componants/comp1/comp1.component';
import { WelcomeComponent } from './componants/welcome/welcome.component';
import { HeaderComponent } from './componants/header/header.component';
import { QuestionComponent } from './componants/question/question.component';
import { ChangeBgDirective } from './change-bg.directive';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    WelcomeComponent,
    HeaderComponent,
    QuestionComponent,
    ChangeBgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
