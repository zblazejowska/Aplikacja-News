import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProfileContainerComponent} from "./profileContainer/profileContainer.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {AboutProjectComponent} from "./aboutProject/aboutProject.component";
import {SearchContainerComponent} from "./searchContainer/searchContainer";
import {LoginContainerComponent} from "./loginContainer/loginContainer.component";

const routes: Routes = [
  {path: '', redirectTo: 'homepage/6', pathMatch: 'full'},
  {path: 'search/:tag', component: SearchContainerComponent},
  {path: 'homepage/:cat', component: HomepageComponent},
  {path: 'homepage/6', component: HomepageComponent},
  {path: 'profile', component: ProfileContainerComponent},
  {path: 'about', component: AboutProjectComponent},
  {path: 'login', component: LoginContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
