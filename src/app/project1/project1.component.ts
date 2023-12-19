import { Component, Input, OnInit } from '@angular/core';
import { Module1Component } from './module1/module1.component';





@Component({
  selector: 'app-project1',
  standalone: true,
  imports: [
    Module1Component
  ],
  templateUrl: './project1.component.html',
  styleUrl: './project1.component.css'
})
export class Project1Component {
  @Input() projectName: string='';
  
  Name: string = "module1";
  

  ngOnInit(){
    
  }
}
