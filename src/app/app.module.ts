import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ElModule } from './element-angular';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ElModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
