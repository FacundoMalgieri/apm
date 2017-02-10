import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [ StarComponent ],
    imports: [ CommonModule ],
    exports: [
        FormsModule,
        CommonModule,
        StarComponent
    ]
})
export class SharedModule { }