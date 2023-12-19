import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComponentModule } from "./component/component.module";
import { EmployeePerformanceComponent } from './component/employee-performance/employee-performance.component';
import { Module1Component } from './project1/module1/module1.component';


@NgModule({
    declarations: [],
    imports: [
      BrowserModule,
      AppComponent,
      ComponentModule,
      EmployeePerformanceComponent,
      Module1Component
    ],
    providers: [],
    // bootstrap: [AppComponent]
  })
  export class AppModule { }