import { Component, inject } from '@angular/core';
import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "",
        component: LayoutComponent,
        canActivateChild: [()=> inject(AuthService).isAuthenticated()],
        children: [
            {
                path: "",
                component: HomeComponent
            }
        ]
    }
];
