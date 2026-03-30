import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutUs} from './components/about-us/about-us';
import { ContactUs } from './components/contact-us/contact-us';
import { OrderComponent} from './components/order/order';
import { NotFoundComponent } from './components/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: Home },
  { path: 'about', component: AboutUs },
  { path: 'contact', component: ContactUs },
  { path: 'courses', component: OrderComponent }, 
  { path: '**', component: NotFoundComponent } 
];