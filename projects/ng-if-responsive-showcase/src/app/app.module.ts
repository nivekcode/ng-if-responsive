import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgIf} from "@angular/common";

import {NgIfResponsiveHideDirective} from "../../../ng-if-responsive/src/lib/ng-if-responsive-hide.directive";
import {NgIfResponsiveShowDirective} from "../../../ng-if-responsive/src/lib/ng-if-responsive-show.directive";
import {RESPONSIVE_NG_IF_CONFIG} from "../../../ng-if-responsive/src/lib/responsive-config.model";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgIf,
    NgIfResponsiveHideDirective,
    NgIfResponsiveShowDirective
  ],
  providers: [
    {
      provide: RESPONSIVE_NG_IF_CONFIG,
      useValue: {
        sm: 640,
        md: 769,
        lg: 1024,
        xl: 1080
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
