import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Student {
  id: number;
  name: string;
  age: number;
  photoUrl: string;
}

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.html', 
  styleUrls: ['./student.css']
})


export class StudentComponent {
  students: Student[] = [
    { 
      id: 1, name: 'hala', age: 22, 
      photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw1G2__eNaHy8wkEB5UZRIiXsNBXGcw3Nscw&s' 
    },
    { 
      id: 2, name: 'salma', age: 21, 
      photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO1nJw2tVcFDwLlcOO87Yecnu2bmIN0nU6v4RRxZCIcg&s' 
    },
    { 
      id: 3, name: 'shahd', age: 23, 
      photoUrl: 'https://pixaii.com/files/preview/960x960/11759820975qmxzsuv4b2hri3ckcazglamdz0rs9mmwyjrvxt07bgn67jclqkpxxrykb9imkyucm1xk3f1ocwzu7h7mnevlpbdum7tnrbexmg7y.jpg' 
    },
   
    { 
      id: 4, name: 'Sara', age: 20, 
      photoUrl: 'https://thumbs.dreamstime.com/b/cartoon-girl-sitting-desk-laptop-front-her-ai-generated-image-cartoon-girl-sitting-desk-320199680.jpg' 
    },
    { 
      id: 5, name: 'nour', age: 24, 
      photoUrl: 'https://thumbs.dreamstime.com/b/cartoon-girl-typing-laptop-computer-pink-room-plant-cute-works-her-desk-next-to-potted-great-children-s-375117875.jpg' 
    },
    { 
      id: 6, name: 'rodayna', age: 22, 
      photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBH68xHMf8nxI4JU92N-GhAcrPPf2jydgTQ&s' 
    }
  ];
}