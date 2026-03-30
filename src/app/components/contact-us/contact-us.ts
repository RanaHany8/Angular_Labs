import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [], // لو هتستخدمي Forms (NgModel) لازم تضيفي FormsModule هنا
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css'
})
export class ContactUs {}