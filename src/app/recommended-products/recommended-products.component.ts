import { Component } from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-recommended-products',
  standalone: true,
  imports: [],
  templateUrl: './recommended-products.component.html',
  styleUrl: './recommended-products.component.css'
})
export class RecommendedProductsComponent {
  productsList:Product[] = [
    {name: "cake", price: 200, image: "../../assets/images/port2.png"},
    {name: "hut", price: 10000, image: "../../assets/images/port1.png"},
    {name: "cake", price: 200, image: "../../assets/images/port2.png"},
    {name: "tent", price: 4000, image: "../../assets/images/port3.png"},
    {name: "cake", price: 200, image: "../../assets/images/port2.png"},
    {name: "hut", price: 10000, image: "../../assets/images/port1.png"},
    {name: "hut", price: 10000, image: "../../assets/images/port1.png"},
    {name: "tent", price: 4000, image: "../../assets/images/port3.png"},
    {name: "tent", price: 4000, image: "../../assets/images/port3.png"},
  ]
}
