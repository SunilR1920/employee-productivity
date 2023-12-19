
import { Component, Output, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Employee1Component } from './employee1/employee1.component';




@Component({
  selector: 'app-module1',
  standalone: true,
  imports: [
    RouterModule,
    Employee1Component,
  ],
  templateUrl: './module1.component.html',
  styleUrl: './module1.component.css'
})

export class Module1Component implements OnInit {

  eName1: string='  Employee 1';
  eName2: string= ' Employee 2';


  @Input() moduleName: string='';


  ngOnInit(): void {

  }
  

}
