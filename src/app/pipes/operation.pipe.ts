import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'operation',
})
export class OperationPipe implements PipeTransform {
  transform(a: any, b: any, c: any) {
    let oper = `
        Sum: ${a + b} 
        subtraction: ${a - b}
        product: ${a * b}
        division ${a / b}
        Sum3: ${a + b + c}
    `;
    return oper;
  }
}
