import { CommonModule } from '@angular/common';
import { Component, OnInit ,Inject, PLATFORM_ID} from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { EmployeeService } from '../../../services/employee/employee.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule,CommonModule,HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [EmployeeService]
})
export class DashboardComponent implements OnInit{
  currentRoute!: string;
  title!: string;
  id: any;
  profile: any;
  img:any;
  path = "http://127.0.0.1:8000/storage/images/profile/";
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object,private employee:EmployeeService){
    router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
          .subscribe(event => 
           {
              this.currentRoute = event.url;      
              if(this.currentRoute == "/dashboard/overview") {
                this.title = 'Dashboard';
              } else if(this.currentRoute == "/dashboard/orders/order") {
                this.title = 'Order';
              } else if(this.currentRoute == "/dashboard/report/overall") {
                this.title = 'Report';
              } else if(this.currentRoute == "/dashboard/inventory/ps5") {
                this.title = 'Inventory';
              } else if(this.currentRoute == "/dashboard/profile") {
                this.title = 'Profile';
              }
           });
    }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.id = sessionStorage.getItem('userId');
      this.employee.getProfile(this.id).subscribe(data => {
        this.profile = data;
        this.img = this.profile.profile;
      })
    }
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/');
    this.ngOnInit();
  }
}
