import { Component } from '@angular/core';
import { HeaderStarComponent } from '../header-star/header-star.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderStarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  showLabel($event: any):void {
    if($event.currentTarget.value !== "")
      $event.currentTarget.previousElementSibling.classList.add("floating-label");
    else
      $event.currentTarget.previousElementSibling.classList.remove("floating-label");
  }

  submitButton($event: Event):void {
    $event.preventDefault();
  }
}
