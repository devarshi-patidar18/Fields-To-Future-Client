import { Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { SearchpageComponent } from './common/searchpage/searchpage.component';
import { SignupComponent } from './common/signup/signup.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { CreateGroupComponent } from './group/create-group/create-group.component';
import { JoinGroupComponent } from './group/join-group/join-group.component';

export const routes: Routes = [{
  path: '',
  component: HomeComponent,
  title: 'Home page',
},
{
  path: 'login',
  component: LoginComponent,
  title: 'Login page',
},
{
  path: 'searchpage',
  component: SearchpageComponent,
  title: 'Search page',
},
{
  path: 'signup',
  component: SignupComponent,
  title: 'Registration page',
},
{
  path: 'userdetails',
  component: UserDetailsComponent,
  title: 'User Dashboard'
},
{
  path: 'create-group',
  component: CreateGroupComponent,
  title: 'Create Group'
},
{path: 'join-group',component: JoinGroupComponent,title: 'Join Group'},
];

export default routes;
