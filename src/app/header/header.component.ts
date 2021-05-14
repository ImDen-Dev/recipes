import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() openSidenav = new EventEmitter<void>();
  constructor() {}

  sidenavOpen(): void {
    this.openSidenav.emit();
  }

  ngOnInit(): void {}
}
