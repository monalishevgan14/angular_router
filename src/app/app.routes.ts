import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProfilComponent } from './profil/profil.component';
import { UsersComponent } from './users/users.component';
import { BasicFormComponent } from './basic-form/basic-form.component';


export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactusComponent},
    {path:'profile/:name', component:ProfilComponent},
    {path:'users/:id/:name',component:UsersComponent},
    {path:'basicf',component:BasicFormComponent},
    {path: '**', redirectTo: 'home' }, // Fallback for unexpected URLs
    
];
