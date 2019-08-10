import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-live-auction-list',
  templateUrl: './live-auction-list.component.html',
  styleUrls: ['./live-auction-list.component.css']
})
export class LiveAuctionListComponent implements OnInit {

   today= new Date();
  jstoday = '';
  constructor() {
    this.jstoday = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');
  }

  products:Product[]=[
    {
      productid:1001,
       productname:"Laptop",
       productseller:"HP",
       productprice:45000,
       productbname:"Ramu",
        productcurrentbid:50.0,
        productcurrentbidder:"",
        producttotalbis:0,
        productauctiondate:new Date(2019,8,10),
        // productImage:new File(null,'../../assets/images.jpg')   
    },
// 

    //    productname:"Laptop",
      
    // productseller:"HP",
    //    productprice:45000,
    //    productbname:"Ramu",
    //     productcurrentbid:null,
    //     productcurrentbidder:"",
    //     producttotalbis:0,
    //      productauctiondate:new Date(2019,8,11)  
    // },
    {
      productid:1001,
       productname:"Laptop",
       productseller:"HP",
       productprice:45000,
       productbname:"Ramu",
        productcurrentbid:null,
        productcurrentbidder:"",
        producttotalbis:0,
         productauctiondate:new Date(2019,8,10)  
    }

//       // {
      //  productid:1002,
    //    productname:"Laptop",
    //    productseller:"Dell",
    //    productprice:40000
    //  },
    //   {
    //    productid:1003,
    //    productname:"Laptop",
    //    productseller:"Lenovo",
    //    productprice:45000
    //  }
    
  ];


  ngOnInit() {
  }

}
