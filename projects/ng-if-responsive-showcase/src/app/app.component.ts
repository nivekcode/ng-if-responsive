import {ChangeDetectorRef, Component} from '@angular/core';
import {ResponsiveService} from "../../../ng-if-responsive/src/lib/responsive.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngIfResponsiveShowcase';

  constructor(public responsiveService: ResponsiveService, private cdr: ChangeDetectorRef) {
  }
}
