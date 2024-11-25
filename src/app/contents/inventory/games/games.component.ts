import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../services/item/product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from '../../../pages/partials/loader/spinner/spinner.component';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule, SpinnerComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css',
  providers:[ProductService]
})
export class GamesComponent implements OnInit {
  formShown: boolean = false;
  isLoad: boolean = false;
  success: boolean = false;
  delete:boolean = false;
  isDeleted: boolean = false;
  category: string = 'games';
  allgames: any[] = [];
  games: any [] = [];
  name: string = "";
  path = "http://127.0.0.1:8000/storage/images/product/";
  file:any;
  itemId: any;
  item = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    quantity: new FormControl(),
    categorie: new FormControl(),
  });

  constructor(private product: ProductService) {}

  ngOnInit(): void {
    this.displayProduct();
  }

  displayProduct() {
    this.isLoad = true;
    this.product.getProduct(this.category).subscribe(data => {
      this.allgames = data as any[];
      this.filterProducts();
      this.isLoad = false;
    })
  }

  filterProducts() {
    if (this.name.length == 0) {
    this.games = this.allgames.slice();
  } else {
    this.games = this.allgames.filter((product) => {
      return product.name.toLowerCase().includes(this.name.toLowerCase());
    });
  }
  }
  
  getImage(event: any) {
    this.file = event.target.files[0];
  }
  submit() {
    this.isLoad = true;
    const formData = new FormData();
    if (this.file) {
      formData.append('name', this.item.get('name')?.value || '');
      formData.append('price', this.item.get('price')?.value || '');
      formData.append('description', this.item.get('description')?.value || '');
      formData.append('quantity', this.item.get('quantity')?.value || '');
      formData.append('categorie', this.item.get('categorie')?.value || '');
      formData.append('image', this.file);
      this.product.editProduct(formData, this.itemId).subscribe (
        res => {
          console.log(res);
          this.isLoad = false;
          this.formShown = false;
          this.success = true;
          this.displayProduct();
      });
    }
  }
  
  editFormShow(product : any) {
    this.formShown = true;
    this.itemId = product.id;
    this.item.patchValue({
      name: product.name,
      price: product.price,
      description: product.description,
      quantity: product.quantity,
      categorie: product.categorie,
    })
  }

  deleteShow(product: any) {
    this.delete = true;
    this.formShown = true;
    this.itemId = product.id;
    this.item.patchValue({
      name: product.name,
      price: product.price,
      description: product.description,
      quantity: product.quantity,
      categorie: product.categorie,
    })
  }

  deleteProduct() {
    this.isLoad = true;
    this.product.deleteProduct(this.itemId).subscribe(
      res => {
        console.log(res);
        this.isLoad = false;
        this.isDeleted = true;
        this.formShown = false;
        this.displayProduct();
    });
  }

  hideForm() {
    this.formShown = false;
    this.delete = false;
  }
  closeMessage() {
    this.success = false;
    this.isDeleted = false;
  }
}
