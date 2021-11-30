import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import {RouterModule, Routes} from '@angular/router';
import { TeammembersComponent } from './teammembers/teammembers.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    TeammembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
