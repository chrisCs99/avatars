import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
