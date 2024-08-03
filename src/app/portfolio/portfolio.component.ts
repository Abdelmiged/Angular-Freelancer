import { Component, ViewChild, ElementRef } from '@angular/core';
import { HeaderStarComponent } from '../header-star/header-star.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [HeaderStarComponent, NgClass],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  @ViewChild('imageTemplateHolder') imageTemplateHolder!:ElementRef;
  isHidden:boolean = true;

  previewImage($event: any) {
    let img = $event.currentTarget.querySelector("img");
    this.isHidden = false;

    this.imageTemplateHolder.nativeElement.setAttribute('src', img.getAttribute('src'));
    this.imageTemplateHolder.nativeElement.setAttribute('alt', img.getAttribute('alt'));
  }

  closeImagePreview($event: Event) {
    if($event.target === $event.currentTarget)
      this.isHidden = true;
  }
}
