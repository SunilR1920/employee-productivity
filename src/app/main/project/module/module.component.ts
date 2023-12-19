import { Component, Output, Input, OnInit  } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-module',
  standalone: true,
  imports: [
    EmployeeComponent
  ],
  templateUrl: './module.component.html',
  styleUrl: './module.component.css'
})
export class ModuleComponent {
  eName1: string='  Employee 1';
  eName2: string= ' Employee 2';


  @Input() moduleName: string='';


  ngOnInit(): void {

  }
  
}
