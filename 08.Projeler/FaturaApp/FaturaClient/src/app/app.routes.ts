import { Routes } from '@angular/router';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { LayoutsComponent } from './components/layouts/layouts.component';

export const routes: Routes = [
    {
        path: "",
        component: LayoutsComponent,
        children:[
            {
                path: "",
                component: InvoicesComponent
            }
        ]
    }
];
