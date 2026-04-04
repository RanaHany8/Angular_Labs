import { Component, inject, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CoursesService } from '../../services/courses';
import { Course } from '../../models/course';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css'
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly courseService = inject(CoursesService);
  private readonly router = inject(Router);
  private readonly cdr = inject(ChangeDetectorRef); // السطر ده مهم جداً

  course: Course | undefined;
  private routeSub: Subscription | null = null;
  private dataSub: Subscription | null = null;

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.dataSub = this.courseService.getCourseByID(id).subscribe({
          next: (data) => {
            this.course = data; 
            this.cdr.detectChanges(); 
            console.log('Course Data Loaded Successfully:', data);
          },
          error: (err) => {
            console.error('API Error:', err);
            this.router.navigate(['/courses']);
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routeSub) this.routeSub.unsubscribe();
    if (this.dataSub) this.dataSub.unsubscribe();
  }
}