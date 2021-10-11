import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { map, mergeAll, skip, take, takeLast } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private productService : ProductService,
    private router : Router,
    private route : ActivatedRoute) { }

  products : Array<any> = []

  query = '';

  static count = 0;
  ngOnInit(): void {
    this.route.data
    .pipe(
      map(data => data['value']),
      map((products: Array<any>) => from(products)),
      mergeAll(),
      take(5)
    )
    .subscribe((product : any) => {
        this.products.push(product)
      })
  }

  getProducts(skipValue : number){
    this.products = [];
    this.productService.getAllProducts().pipe(
      map((products: Array<any>) => from(products)),
      mergeAll(),
      skip(skipValue * 5),
      take(5)
    ).subscribe((products : Array<any>) => {
        this.products.push(products);
      })
  }

  onProductSelected(product:  any){
    this.router.navigate([`products/overview/${product.id}`])
  }

  onNext(){
    ProductsComponent.count++;
    this.getProducts(ProductsComponent.count)
  }

  onPrev(){
    ProductsComponent.count--;
    this.getProducts(ProductsComponent.count)
  }

  onFirst(){
    ProductsComponent.count = 0;
    this.getProducts(ProductsComponent.count)
  }

  onLast(){
    ProductsComponent.count = 19;
    this.getProducts(ProductsComponent.count)
  }

}
