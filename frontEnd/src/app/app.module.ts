import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainViewComponent } from './component/main-view/main-view.component';
import { LeftNavComponent } from './component/left-nav/left-nav.component';
import { NewDrugFormComponent } from './component/new-drug-form/new-drug-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    LeftNavComponent,
    NewDrugFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
