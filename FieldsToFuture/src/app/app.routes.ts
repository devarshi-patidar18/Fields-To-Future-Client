import { Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { SearchpageComponent } from './common/searchpage/searchpage.component';

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
];

  export default routes;
