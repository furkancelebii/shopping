import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from 'src/app/categorie/categorie';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
  providers:[CategorieService,ProductService]
})
export class ProductAddForms2Component implements OnInit {

  constructor(private formBuilder:FormBuilder,private alertifyService:AlertifyService,private categoryService:CategorieService,private productService:ProductService){}

  productAddForm:FormGroup;
  product:Product=new Product;
  categories:Category[];

  createProductAddForm(){
    this.productAddForm=this.formBuilder.group({
      name:["",Validators.required],
      description:["",Validators.required],
      imageUrl:["",Validators.required],
      price:["",Validators.required],
      categoryId:["",Validators.required],

    });
  }

  
  ngOnInit(): void {
    this.createProductAddForm();
    this.categoryService.getCategorie().subscribe(data=>{
      this.categories=data
    })
  }
  add(){
    if(this.productAddForm.valid){
      this.product=Object.assign({},this.productAddForm.value)
    }
    this.productService.addProduct(this.product).subscribe(data=>{this.alertifyService.success(data.name +" başarıyla eklendi")});

  }

}
