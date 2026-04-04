import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseDetailsComponent } from './course-details';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

describe('CourseDetailsComponent', () => {
  let component: CourseDetailsComponent;
  let fixture: ComponentFixture<CourseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDetailsComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(), // بيمنع التست من إنه يبعت طلبات حقيقية للسيرفر
        provideRouter([]) // عشان يحل مشكلة الـ ActivatedRoute اللي في الكومبوننت
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // بيشغل الـ ngOnInit عشان يسحب الداتا
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});