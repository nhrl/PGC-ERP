import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order/order.service';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from '../../../pages/partials/loader/spinner/spinner.component';

@Component({
  selector: 'app-order-item',
  standalone: true,
  imports: [CommonModule,HttpClientModule,SpinnerComponent],
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.css',
  providers:[OrderService]
})
export class OrderItemComponent implements OnInit {
  confirmationShown: boolean = false;
  status: string = "Order Placed";
  success: boolean = false;
  nextStatus: string = "Order Processing";
  itemId: any;
  allOrder: any [] = [];
  isLoad: boolean = false;
  constructor(private order: OrderService){}

  ngOnInit(): void {
    this.isLoad = true;
    this.getOrder();
  }

  showConfirmation(item:any) {
    this.confirmationShown = true;
    this.itemId = item.order_id;
  }

  hideConfirmation() {
    this.confirmationShown = false;
  }
  
  getOrder() {
    this.order.getOrder(this.status).subscribe(data => {
      this.allOrder = data as any [];
      this.isLoad = false;
    })
  }

  proceed() {
    this.order.updateStatus(this.itemId, this.nextStatus).subscribe(res =>{
      this.success = true;
      this.hideConfirmation();
      this.ngOnInit();
      setTimeout(() => {
        this.success = false;
      }, 3000);
    })
  }
}
