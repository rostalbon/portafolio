import { Routes } from '@angular/router';
import { About } from './views/about/about';
import { Projects } from './views/projects/projects';
import { Contact } from './views/contact/contact';
import { Home } from './views/home/home';
import { SignIn } from './views/sign-in/sign-in';
import { CreateProject } from './views/projects/create-project/create-project';

export const routes: Routes = [
    {path:"", redirectTo:"home", pathMatch:'full'},
    {path:"about", component:About},
    {path:"projects", component:Projects, children: [
        {path: "create-project", component:CreateProject}
    ]},
    {path:"contact", component:Contact},
    {path:"home", component:Home},
    {path: "sign-in", component:SignIn},
];
