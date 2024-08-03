import { Component } from '@angular/core';
import { HeaderStarComponent } from '../header-star/header-star.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderStarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
