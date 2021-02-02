import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {SearchComponent} from './search/search.component';
import {OptionsComponent} from './options/options.component';



@NgModule({
  declarations: [
    AppComponent, SearchComponent, OptionsComponent
  ],
  imports: [
    BrowserModule,  BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
