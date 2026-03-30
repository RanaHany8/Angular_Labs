import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from '../courses/courses'; 
import { CategoriesService } from '../../services/categories';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule, CoursesComponent], 
  templateUrl: './order.html',
  styleUrl: './order.css' 
})
export class OrderComponent implements OnInit {
  private catService = inject(CategoriesService);
  
  categories: any[] = [];
  selectedCatId: number = 0; 
  totalPriceFromChild: number = 0; 

  ngOnInit(): void {
  
    this.categories = this.catService.getAllCategories();
  }


  onPriceChanged(price: number) {
    this.totalPriceFromChild = price;
  }
}