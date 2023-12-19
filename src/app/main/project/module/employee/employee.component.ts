import { Component, Input , OnInit } from '@angular/core';
import { EmployeePerformanceComponent } from '../../../../component/employee-performance/employee-performance.component';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    EmployeePerformanceComponent
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  @Input() employeeName1: string='';
  @Input() employeeName2: string='';

  NgOnInit(){

  }


}
