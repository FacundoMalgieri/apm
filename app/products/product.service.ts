import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Injectable }     from '@angular/core';
import { IProd }          from './products';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService {
    private _productUrl = 'api/products/products.json';

    constructor(private _http: Http) {

    }

    getProducts(): Observable<IProd[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProd[]>response.json())
            .catch(this.handleError);
    }

    getProduct(id: number): Observable<IProd> {
        return this.getProducts()
            .map((products: IProd[]) => products.find(p => p.productId === id))
            .do(data => console.log('Product: ' + JSON.stringify(data)));
 
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
} 