import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/item/product.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from '../partials/loader/spinner/spinner.component';
import { EmployeeService } from '../../services/employee/employee.service';
import { OrderService } from '../../services/order/order.service';
import { CommaSeparatedModule } from '../../../pipes/comma-separated.module';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule,RouterModule,SpinnerComponent,CommaSeparatedModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
  providers:[ProductService,EmployeeService,OrderService]
})
export class OverviewComponent implements OnInit {
  totalProducts: any;
  totalCustomer: any;
  totalIncome: any;
  totalSale: any;
  totalValue:boolean = false;
  isload: boolean = false;
  allOrders: any [] = [];
  allProducts: any [] = [];
  items: any [] = [];
  name: string = "";
  status: string = "Order Placed";
  constructor(private product: ProductService, private emp: EmployeeService,private order:OrderService) {}

  ngOnInit(): void {
    this.getProductbyQuantity();
    this.getOrders();
    this.totalItem();
    this.getCustomer();
    this.getSale();
    this.getIncome();
  }

  getIncome() {
    this.order.getIncome().subscribe(total => {
      this.totalIncome = total;
      this.totalValue = false;
    })
  }

  getSale() {
    this.order.getSale().subscribe(sales => {
      this.totalSale = sales;
    })
  }

  getCustomer() {
    this.emp.getTotalCustomer().subscribe(total => {
      this.totalCustomer = total;
    })
  }

  getOrders() {
    this.order.getOrder(this.status).subscribe(data => {
      this.allOrders = data as any [];
    })
  }

  getProductbyQuantity() {
    this.isload = true;
    this.product.getLowestQuantity().subscribe(data => {
      this.allProducts = data as any[];
      this.filterProducts();
    })
  }

  filterProducts() {
    if (this.name.length == 0) {
      this.items = this.allProducts.slice();
      this.isload = false;
  } else {
    this.items = this.allProducts.filter((product) => {
      return product.name.toLowerCase().includes(this.name.toLowerCase());
    });
  }
  }

  totalItem() {
    this.totalValue = true;
      this.product.totalProduct().subscribe(
        (total) => {
          this.totalProducts = total;
        })
  }

  getQuantityStyle(quantity: number): any {
    if (quantity <= 5) {
      return { color: '#F93131' };
    } else if (quantity <= 20) {
      return { color: '#7AE327' };
    } else {
      return { color: '#5565F9'};
    }
  }
}
