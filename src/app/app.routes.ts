import { Routes } from '@angular/router';
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { Home } from './home/home';

export const routes: Routes = [
    {path:"", redirectTo:"home", pathMatch:'full'},
    {path:"about", component:About},
    {path:"projects", component:Projects},
    {path:"contact", component:Contact},
    {path:"home", component:Home},
];
