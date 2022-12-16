import {Injectable, NgZone} from "@angular/core";
import {ViewportRuler} from "@angular/cdk/overlay";
import {distinctUntilChanged, interval, map, Observable, scan} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ResponsiveService {

  constructor(private viewPortRuler: ViewportRuler, private ngZone: NgZone) {
  }

  public isScreenSmallerThanBreakpoint(breakPointWidth: number): Observable<boolean> {
    return this.viewPortRuler.change().pipe(
      map(() => this.viewPortRuler.getViewportSize().width),
      map(screenWidth => screenWidth < breakPointWidth),
      distinctUntilChanged()
    );
  }

  public isScreenBiggerThanBreakpoint(breakPointWidth: number): Observable<boolean> {
    return this.viewPortRuler.change().pipe(
      map(() => this.viewPortRuler.getViewportSize().width),
      map(screenWidth => screenWidth > breakPointWidth),
      distinctUntilChanged()
    );
  }
}
