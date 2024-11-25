import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../services/item/product.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../../pages/partials/loader/spinner/spinner.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule, CommonModule, SpinnerComponent],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css',
  providers:[ProductService]
})
export class AddFormComponent {
  file:any;
  isload:boolean = false;
  success:boolean = false;
  item = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    quantity: new FormControl(),
    categorie: new FormControl()
  });

  constructor(private product: ProductService, private router:Router) {}
  getImage(event: any) {
    this.file = event.target.files[0];
  }

  submit() {
    this.isload = true;
    const formData = new FormData();
    if (this.file) {
      formData.append('name', this.item.get('name')?.value || '');
      formData.append('price', this.item.get('price')?.value || '');
      formData.append('description', this.item.get('description')?.value || '');
      formData.append('quantity', this.item.get('quantity')?.value || '');
      formData.append('categorie', this.item.get('categorie')?.value || '');
      formData.append('image', this.file);

      this.product.createItem(formData).subscribe((_res: any) => {
        this.isload = false;
        this.success = true;
      });
    }
  }

  close() {
    this.router.navigate(['/dashboard/inventory/ps5']);
  }
}
