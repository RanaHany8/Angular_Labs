import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {
  transform(value: number, percentage: number = 10): number {
    if (!value) return 0;
   
    const perc = Number(percentage) || 10;
    let discountAmount = value * (perc / 100);
    return value - discountAmount;
  }
}