import { IProd } from './products';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: IProd[], filterBy: string): IProd[] { 
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((product: IProd) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}