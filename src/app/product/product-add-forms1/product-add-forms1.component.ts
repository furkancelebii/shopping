import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/categorie/categorie';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers:[CategorieService,ProductService]
})
export class ProductAddForms1Component implements OnInit {
  constructor(private categoryService:CategorieService,private productService:ProductService,private alertifyService:AlertifyService){}
  model :Product=new Product
  categories:Category[];
  

  ngOnInit(): void {
    this.categoryService.getCategorie().subscribe(data=>{
      console.log(data);
      
      this.categories=data
    })
  }
  add(form:NgForm){
    this.productService.addProduct(this.model).subscribe(data=>{this.alertifyService.success(data.name +" başarıyla eklendi")});
  }

}
