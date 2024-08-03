import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header-star',
  standalone: true,
  imports: [],
  templateUrl: './header-star.component.html',
  styleUrl: './header-star.component.css'
})
export class HeaderStarComponent implements AfterViewInit {
  @Input() headerValue!:string;
  @Input() generalColor:string = 'rgb(255, 255, 255)';
  @Input() starBackgroundColor:string = 'rgb(26, 188, 156)';

  @ViewChild('header') header!:ElementRef;
  @ViewChild('ruler') ruler!:ElementRef;
  @ViewChild('star') star!:ElementRef;

  ngAfterViewInit(): void {
      this.header.nativeElement.style.color = this.generalColor;
      this.ruler.nativeElement.style.backgroundColor = this.generalColor;
      this.star.nativeElement.style.backgroundColor = this.starBackgroundColor;
      this.star.nativeElement.style.color = this.generalColor;
  }
}
