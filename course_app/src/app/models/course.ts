export interface Course {
  id: string | number;     
  title: string;
  instructor: string;
  price: number;
  seats: number;
  image: string;
  catId: string | number;  
  category: string;       
}