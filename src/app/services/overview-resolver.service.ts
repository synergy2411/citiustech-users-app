import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class OverviewResolverService implements Resolve<any> {

  constructor(private productService : ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = +route.params.prodId;
    return this.productService.getSingleProduct(id)
  }


}
