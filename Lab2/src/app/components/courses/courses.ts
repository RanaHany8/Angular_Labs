import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { Course } from '../../models/course'; 

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class CoursesComponent {

  selectedCategory: string = 'All';

 courses: Course[] = [
  { 
    id: 1, 
    title: 'JavaScript Basics', 
    instructor: 'Rana Hany', 
    price: 500, 
    seats: 5, 
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500&q=80', 
    catId: 1, 
    category: 'Programming' 
  },
  { 
    id: 2, 
    title: 'UI/UX Design', 
    instructor: 'Ahmed Ali', 
    price: 300, 
    seats: 2, 
    image: 'data:image/jpeg;base64,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', 
    catId: 2, 
    category: 'Design' 
  },
  { 
    id: 3, 
    title: 'Node.js Backend', 
    instructor: 'shahd', 
    price: 600, 
    seats: 0, 
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&q=80', 
    catId: 1, 
    category: 'Programming' 
  },
  { 
    id: 4, 
    title: 'Social Media Marketing', 
    instructor: 'Jana Reda', 
    price: 400, 
    seats: 1, 
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&q=80', 
    catId: 3, 
    category: 'Marketing' 
  },
  { 
    id: 5, 
    title: 'Adobe Photoshop', 
    instructor: 'Hany Mohamed', 
    price: 350, 
    seats: 10, 
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&q=80', 
    catId: 2, 
    category: 'Design' 
  }
];

 
  register(c: Course) {
    if (c.seats > 0) {
      c.seats--;
    }
  }
}