import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { OrderComponent } from './components/order/order';
import { InsertCourseComponent } from './components/insert-course/insert-course'; 
import { NotFoundComponent } from './components/not-found/not-found';
import { CourseDetailsComponent } from './components/course-details/course-details'; 
import { ContactUs} from './components/contact-us/contact-us'; 

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: Home },
  { path: 'about', component: AboutUs },
  { path: 'courses', component: OrderComponent },
  
 
   { path: 'contact', component: ContactUs, title: 'Contact Us' }, 

  { path: 'insert', component: InsertCourseComponent, title: 'Add New Course' }, 
  { path: 'course/:id', component: CourseDetailsComponent },

  { path: '**', component: NotFoundComponent } 
];