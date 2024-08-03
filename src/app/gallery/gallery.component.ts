import { Component } from '@angular/core';
import { HeaderStarComponent } from '../header-star/header-star.component';
import { Product } from '../interface/product';
import { RecommendedProductsComponent } from '../recommended-products/recommended-products.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [HeaderStarComponent, RecommendedProductsComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  productsList:Product[] = [
    {name: "hut", price: 10000, image: "../../assets/images/port1.png"},
    {name: "cake", price: 200, image: "../../assets/images/port2.png"},
    {name: "tent", price: 4000, image: "../../assets/images/port3.png"},
    {name: "hut", price: 10000, image: "../../assets/images/port1.png"},
    {name: "cake", price: 200, image: "../../assets/images/port2.png"},
    {name: "tent", price: 4000, image: "../../assets/images/port3.png"},
    {name: "hut", price: 10000, image: "../../assets/images/port1.png"},
    {name: "cake", price: 200, image: "../../assets/images/port2.png"},
    {name: "tent", price: 4000, image: "../../assets/images/port3.png"},
  ]
}
