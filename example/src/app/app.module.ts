import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UnicornifyModule } from "../../../src";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UnicornifyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
