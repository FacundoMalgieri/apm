import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'
import { IProd } from './products';

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html',
    styleUrls: ['product-detail.component.css']
})

export class ProductDetailComponent {
    private sub: Subscription;
    errorMessage: string;
    pageTitle: string = 'Product Detail';
    product: IProd;
    
    constructor(private _route: ActivatedRoute, 
                private _router: Router,
                private _productService: ProductService) { 
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
            }
        );
    }

    getProduct(id:number) {
        this._productService.getProduct(id).subscribe(
                product => this.product = product,
                error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }

    ngOnDestroy() {
        this.sub.unsubscribe(); 
    }

}