import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'recipes';
  isExtraSmallScreen: Observable<boolean>;

  constructor(private breakpoints: BreakpointObserver) {
    this.isExtraSmallScreen = breakpoints
      .observe(`(max-width: 600px)`)
      .pipe(map((breakpoint) => breakpoint.matches));
  }
}
