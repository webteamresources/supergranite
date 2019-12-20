import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterColor',
    pure: false
})
export class FilterColor implements PipeTransform {
    
    transform(value: any, filterString: string, propName: string): any {
        if(value.length === 0 || filterString === '' || filterString === 'All') {
            return value;
        }
        const resultArray = [];
        for (const item of value) {
            if(item[propName] === filterString){
                resultArray.push(item);
            }
        }
        return resultArray;
    }
    
}