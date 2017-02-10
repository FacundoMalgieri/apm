import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from './../shared/shared.module';
import { ProductService } from './product.service';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuard } from './product-guard.service';
import { ProductFilterPipe } from './product-filter.pipe';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        ProductDetailComponent,
        ProductListComponent,
        ProductFilterPipe,
    ],
    imports: [
        SharedModule,
        ProductRoutingModule
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})

export class ProductModule { }