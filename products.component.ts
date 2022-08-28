import { Component, OnInit } from '@angular/core';
import { product } from '../model/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!: Array<product>;
 

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
     this.productService.getAllProducts().subscribe({
      next : (data:any[])=> {
       this.products= data; 
      },
     

    });
 
  }
  deleteProducts(p: any){
    let conf =confirm("are you sure?");
    if (conf==false) return;
    let index = this.products.indexOf(p);
    this.products.splice(index,1);

  }

}
