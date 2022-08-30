import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharsheetComponent } from './charsheet/charsheet.component';
import { CharstatsService } from './charstats.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CharsheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CharstatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
