import { Routes } from '@angular/router';
import { LayoutsComponent } from './components/layouts/layouts.component';

export const routes: Routes = [
    {
        path: "",
        component: LayoutsComponent,
        children: [
            {
                path: "",
                loadComponent: ()=> import("./components/home/home.component")
            }
        ]
    }
];
