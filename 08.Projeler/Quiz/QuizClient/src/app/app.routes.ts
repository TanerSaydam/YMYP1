import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: ()=> import("./ui/components/home/home.component")
    },
    {
        path: "quiz/:roomNumber/:email",
        loadComponent: ()=> import("./ui/components/quiz/quiz.component")
    },
    {
        path: "admin",
        children: [
            {
                path: "login",
                loadComponent: ()=> import("./admin/components/login/login.component")
            },
            {
                path: "",
                loadComponent: ()=> import("./admin/components/layout/layout.component"),
                children: [
                    {
                        path: "",
                        loadComponent: ()=> import("./admin/components/home/home.component")
                    },
                    {
                        path:"room/:roomNumber",
                        loadComponent: ()=> import("./admin/components/room/room.component")
                    },
                    {
                        path: "quiz-detail/:id",
                        loadComponent: ()=> import("./admin/components/quiz-details/quiz-details.component")
                    }
                ]
            }
        ]
    }
];
