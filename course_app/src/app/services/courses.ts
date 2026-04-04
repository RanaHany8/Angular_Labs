import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { environment } from '../../environments/environment'; 

@Injectable({ providedIn: 'root' })
export class CoursesService {
  private http = inject(HttpClient);
  

  private apiUrl = `${environment.apiUrl}/courses`;

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }

  getCourseByID(id: string | number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }

  addCourse(course: any): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course);
  }

  getCoursesByCategoryID(catId: string | number): Observable<Course[]> {
    if (catId == 0 || catId == '0') return this.getAllCourses();

    return this.http.get<Course[]>(`${this.apiUrl}?catId=${catId}`);
  }
}