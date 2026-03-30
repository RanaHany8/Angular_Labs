import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private categories = [
    { id: 1, name: 'Programming' },
    { id: 2, name: 'Design' },
    { id: 3, name: 'Marketing' }
  ];

  constructor() { }

  getAllCategories() {
    return this.categories;
  }
}