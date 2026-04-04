import { 
  Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, inject, OnInit, OnDestroy, ChangeDetectorRef 
} from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { RouterLink } from '@angular/router'; 
import { Subscription } from 'rxjs'; 

import { Course } from '../../models/course'; 
import { DiscountPipe } from '../../pipes/discount.pipe';
import { DisableAfterClickDirective } from '../../directives/disable-after-click.directive';
import { CoursesService } from '../../services/courses'; 

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, DiscountPipe, DisableAfterClickDirective],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class CoursesComponent implements OnChanges, OnInit, OnDestroy {
  @Input() selectedCatId: any = 0; 
  @Output() totalPriceChanged = new EventEmitter<number>(); 

  private coursesService = inject(CoursesService);
  private cdr = inject(ChangeDetectorRef); 

  courses: Course[] = []; 
  totalOrderPrice: number = 0;
  isLoading: boolean = true; 
  private subscriptions: Subscription[] = []; 

  ngOnInit(): void {
    this.loadCourses();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCatId']) {
      this.loadCourses();
    }
  }

  private loadCourses() {
    this.isLoading = true; 
    const id = Number(this.selectedCatId) || 0;
    
    const courseSub = this.coursesService.getCoursesByCategoryID(id).subscribe({
      next: (data) => {
        this.courses = data;
        this.isLoading = false; 
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error("API Error:", err);
        this.isLoading = false;
      }
    });

    this.subscriptions.push(courseSub);
  }

  register(course: Course) {
    if (course.seats > 0) {
      course.seats--;
      this.totalOrderPrice += course.price;
      this.totalPriceChanged.emit(this.totalOrderPrice); 
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub?.unsubscribe());
    console.log("CoursesComponent Destroyed");
  }
}