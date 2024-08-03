import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isWindowScrolled:boolean = false;

  @HostListener("window:scroll", []) onWindowScroll() {
    if(window.scrollY == 0) {
      this.isWindowScrolled = false;
    }
    else {
      this.isWindowScrolled = true;
    }
  }
}
