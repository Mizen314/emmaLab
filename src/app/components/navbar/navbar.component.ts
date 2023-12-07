import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {

  @Output() displayBanner = new EventEmitter<boolean>();

  showBanner(){
    this.displayBanner.emit(true);
  }

  title = 'EmmaLab de Google Analytics';

  }

