import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService{

  private baseUrl = "http://localhost:3000/products"

  constructor(private http : HttpClient){}

  getAllProducts(){
    return this.http.get(this.baseUrl)
  }

  getSingleProduct(id : number){
    return this.http.get(`${this.baseUrl}/${id}`)
  }

}
