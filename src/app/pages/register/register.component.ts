import { Component } from '@angular/core';
import { RouterModule ,Router} from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from '../../services/employee/employee.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, HttpClientModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers:[EmployeeService]
})
export class RegisterComponent {
  constructor(private employee: EmployeeService,private route:Router){}
    registerForm = new FormGroup({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      age: new FormControl(''),
      address: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl('')
    });

    submit() {
      this.employee.register(this.registerForm.value).subscribe(
        (res : any) =>{
              if(res == true){
                this.route.navigate(['']);
              }
        }
      )
    }
}
