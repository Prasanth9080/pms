// Angular modules
import { CommonModule }      from '@angular/common';
import { NgModule }          from '@angular/core';

// Internal modules
import { SharedModule }      from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

// Components
import { HomeComponent }     from './home.component';


@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,

    
    ]
})
export class HomeModule { }
