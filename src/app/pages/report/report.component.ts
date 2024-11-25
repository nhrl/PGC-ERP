import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderService } from '../../services/order/order.service';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from '../partials/loader/spinner/spinner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [RouterModule,HttpClientModule,SpinnerComponent,CommonModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css',
  providers:[OrderService]
})
export class ReportComponent implements OnInit {
  isLoad: boolean = true;
  totalConsole: any;
  totalGames: any;
  allOrders: any;
  totalAccessoreis: any;
  constructor (private order:OrderService) {}

  ngOnInit(): void {
    
    this.getConsole();
    this.getGames();
    this.getAccessories();
    this.getAll();
    
  }

  getConsole() {
    this.isLoad = true;
    this.order.countCategory('console').subscribe(total =>  {
      this.totalConsole = total;
    })
  }

  getGames() {
    this.order.countCategory('games').subscribe(total =>  {
      this.totalGames = total;
    })
  }

  getAccessories() {
    this.order.countCategory('accessories').subscribe(total =>  {
      this.totalAccessoreis = total;
    })
  }

  getAll() {
    this.order.countAll().subscribe(total => {
      this.allOrders = total;
      this.isLoad = false;
    })
  }

}
