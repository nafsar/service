import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MemComponent } from './member/mem.component';


@NgModule({
  declarations: [
    AppComponent,
    MemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
