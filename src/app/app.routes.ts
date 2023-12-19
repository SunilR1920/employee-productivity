import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Module1Component } from './project1/module1/module1.component';
import { ProjectComponent } from './main/project/project.component';


export const routes: Routes = [
    {
        path: 'main',
        component: MainComponent,
        title: 'Main',
        children:[
            {
                path: 'module1',
                component: Module1Component,
                title: 'Module1',
            },
        ]
    },
    
];
