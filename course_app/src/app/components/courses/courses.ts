import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  OnChanges, 
  SimpleChanges, 
  inject,
  OnInit 
} from '@angular/core'; 

import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { Course } from '../../models/course'; 
import { DiscountPipe } from '../../pipes/discount.pipe';
import { DisableAfterClickDirective } from '../../directives/disable-after-click.directive';
import { CoursesService } from '../../services/courses'; 

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, DiscountPipe, DisableAfterClickDirective],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class CoursesComponent implements OnChanges, OnInit {

  @Input() selectedCatId: number = 0; 
  @Output() totalPriceChanged = new EventEmitter<number>(); 

 
  private coursesService = inject(CoursesService);
  
  courses: Course[] = [];
  totalOrderPrice: number = 0;


  ngOnInit(): void {
    this.courses = this.coursesService.getAllCourses();
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCatId']) {
      this.courses = this.coursesService.getCoursesByCatID(this.selectedCatId);
    }
  }

  register(course: Course) {
    if (course.seats > 0) {
      course.seats--;
    
      this.totalOrderPrice += course.price;
     
      this.totalPriceChanged.emit(this.totalOrderPrice); 
    }
  }
}