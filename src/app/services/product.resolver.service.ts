import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { ProductService } from "./product.service";

@Injectable({
  providedIn : 'root'
})
export class ProductResolverService implements Resolve<any>{

  constructor(private productService : ProductService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.productService.getAllProducts().pipe(
      catchError(err => throwError(err))
    );
  }

}
