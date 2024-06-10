import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../services/categorie.service';
import { Category } from './categorie';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css'],
  providers:[CategorieService]
})
export class CategorieComponent implements OnInit{
  constructor(private categorieService:CategorieService){}
  

  title="Kategori Listesi"
  categories:Category[];

  ngOnInit(): void {
    this.categorieService.getCategorie().subscribe(data=>{
      this.categories=data
    })
  }

}
