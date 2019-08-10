import { Component, OnInit, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {Product} from '../product'
// import {ProductDetails} from '../product-details/product-details.component'



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input()
  product:Product;
  
  constructor() { }

  ngOnInit() {
  }

}
