import { Component } from '@angular/core';
import { HeaderStarComponent } from '../header-star/header-star.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderStarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
