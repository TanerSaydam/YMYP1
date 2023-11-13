import { Routes } from '@angular/router';
import { LayoutsComponent } from './ui/components/layouts/layouts.component';
import path from 'path';
import { HomeComponent } from './ui/components/home/home.component';
import { CartComponent } from './ui/components/cart/cart.component';

export const routes: Routes = [
    {
        path: "",
        component: LayoutsComponent,
        children: [
            {
                path: "",
                component: HomeComponent
            },
            {
                path: "cart",
                component: CartComponent
            }
        ]
    }
];
