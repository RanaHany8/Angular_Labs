import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  private http = inject(HttpClient);


  private baseUrl = `${environment.apiUrl}/categories`;

  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}