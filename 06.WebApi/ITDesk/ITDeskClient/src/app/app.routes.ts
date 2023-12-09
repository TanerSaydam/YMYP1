import { Routes } from '@angular/router';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';

export const routes: Routes = [
    {
        path: "login",
        loadComponent:()=> import("./components/login/login.component")
    },
    {
        path: "",
        component: LayoutsComponent,
        canActivateChild: [()=> inject(AuthService).checkAuthentication()],
        children: [
            {
                path: "",
                loadComponent: ()=> import("./components/home/home.component")
            },
            {
                path: "ticket-details/:value",
                loadComponent: ()=> import("./components/detail/detail.component")
            }
        ]
    }
];
