import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CoursesComponent } from './components/courses/courses'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CoursesComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('courses-app');
}