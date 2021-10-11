import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, map, mergeAll } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  product : any;

  constructor(private route : ActivatedRoute, private productService : ProductService) { }


  ngOnInit(): void {

    this.route.data.subscribe(response => {
      this.product = response.product;
    })


    // this.route.params.pipe(
    //   concatMap(params => {
    //     const id = +params['prodId'];
    //     return this.productService.getSingleProduct(id)
    //   })
    // ).subscribe(product => this.product = product)

    // this.route.params.subscribe(params => {
    //   const id = +params["prodId"]
    //   this.productService.getSingleProduct(id)
    //     .subscribe(result => {
    //       this.product = result
    //     })
    // })

    // console.log("Snapshot Params : ", this.route.snapshot.params)
    // let id : number = +this.route.snapshot.params['prodId']
    // this.productService.getSingleProduct(id)
    //   .subscribe(result => {
    //     console.log(result)
    //     this.product = result;
    //   })

  }

}
