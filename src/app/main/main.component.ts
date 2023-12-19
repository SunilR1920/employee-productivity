import { Component, Output, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../component/navbar/navbar.component';
import { Project1Component } from '../project1/project1.component';
import { ProjectComponent } from './project/project.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    Project1Component,
    ProjectComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @Input() pName: string= '';
  // @Input() title: string= '';  

  // pName: string = "Project module1";
  // @Output() pName: string= ' Project 1';

  NgOnInit(){
    
  }

}
