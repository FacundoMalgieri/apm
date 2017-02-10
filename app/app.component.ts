import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='nav navbar-default'>
        <div class="container-fluid">
                <a class="navbar-brand"><b>{{pageTitle}}</b></a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product</a></li>
                </ul> 
            </div> 
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
    </div>
    `,
})
export class AppComponent {
    pageTitle: string = `Facu's Product Managment`;
}
/*
 <h1 class="head"><p>{{pageTitle}}</p></h1>
<pm-products></pm-products>
*/