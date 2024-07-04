import { Routes } from '@angular/router';
import UIQuizComponent from './ui/components/quiz/quiz.component';
import UIHomeComponent from './ui/components/home/home.component';
import AdminHomeComponent from './admin/components/home/home.component';
import { LayoutComponent } from './admin/components/layout/layout.component';
import { LoginComponent } from './admin/components/login/login.component';
import { RoomComponent } from './admin/components/room/room.component';

export const routes: Routes = [
    {
        path: "",
        component: UIHomeComponent
    },
    {
        path: "quiz/:roomNumber",
        component: UIQuizComponent
    },
    {
        path: "admin",
        children: [
            {
                path: "login",
                component: LoginComponent
            },
            {
                path: "",
                component: LayoutComponent,
                children: [
                    {
                        path: "",
                        component: AdminHomeComponent
                    },
                    {
                        path:"room/:roomNumber",
                        component: RoomComponent
                    }
                ]
            }
        ]
    }
];
