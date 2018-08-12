import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StackedareaComponent } from './stackedarea/stackedarea.component';
import { PiechartComponent } from './piechart/piechart.component';
import { DatalistComponent } from './datalist/datalist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MdCardModule } from '@angular/material';
//import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    StackedareaComponent,
    PiechartComponent,
    DatalistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
    //MdCardModule
  ],
  //exports: [
    
   // MdCardModule
  //]
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
