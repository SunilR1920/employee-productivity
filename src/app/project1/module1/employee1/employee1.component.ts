import { Component, Input , OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeePerformanceComponent } from '../../../component/employee-performance/employee-performance.component';

@Component({
  selector: 'app-employee1',
  standalone: true,
  imports: [
    RouterModule,
    EmployeePerformanceComponent,
  ],
  templateUrl: './employee1.component.html',
  styleUrl: './employee1.component.css'
})
export class Employee1Component {
  @Input() employeeName1: string='';
  @Input() employeeName2: string='';

  NgOnInit(){

  }


}
