import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

import { CoursesService } from '../../services/courses'; 
import { CategoriesService } from '../../services/categories';

@Component({
  selector: 'app-insert-course',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink], 
  templateUrl: './insert-course.html'
})
export class InsertCourseComponent implements OnInit, OnDestroy {
  private courseService = inject(CoursesService);
  private catService = inject(CategoriesService);
  private router = inject(Router);

  categories: any[] = [];

  private subscriptions: Subscription[] = []; 

  newCourse: any = {
    title: '',
    instructor: 'Rana Hany',
    price: 0,
    seats: 10, 
    image: 'https://loremflickr.com/640/480/abstract', 
    catId: ''
  };

  ngOnInit(): void {
   
    const catSub = this.catService.getAllCategories().subscribe({
      next: (data) => this.categories = data,
      error: (err) => {
        console.warn('Fallback Categories Used');
        this.categories = [{ id: '1', name: 'Development' }, { id: '2', name: 'Design' }];
      }
    });
    this.subscriptions.push(catSub);
  }

  saveCourse() {
 
    const saveSub = this.courseService.addCourse(this.newCourse).subscribe({
      next: (res) => {
        alert('Course Added Successfully!');
      
        this.router.navigate(['/courses']); 
      },
      error: (err) => alert('Error adding course')
    });
    this.subscriptions.push(saveSub);
  }

  ngOnDestroy(): void {
  
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}