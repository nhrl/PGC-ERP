import { EmployeeService } from './../../services/employee/employee.service';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[EmployeeService]
})

export class LoginComponent {
    notValidCredentials: boolean = false;
    constructor(private employee: EmployeeService,
    private router:Router) {}
    loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    }); 
       
    submit() {
      this.employee.login(this.loginForm.value).subscribe(
        (res: any) => {
            if(res != false) {
              this.notValidCredentials = false
              this.router.navigate(['/dashboard/overview']);
              sessionStorage.setItem('userId', JSON.stringify(res));
            } else {
              this.notValidCredentials = true;
              this.loginForm.patchValue({
                username: "",
                password: ""
              })
              setTimeout(() => {
                this.notValidCredentials = false;
              },2000)
            }
        }
      )
    }
}
