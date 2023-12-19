import { Component, Input, OnInit } from '@angular/core';
import { ModuleComponent } from './module/module.component';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    ModuleComponent
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() projectName: string='';
  
  mName: string = "module1";
  

  ngOnInit(){
    
  } 

}
