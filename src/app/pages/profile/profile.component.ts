import { Component, OnInit,Inject, PLATFORM_ID} from '@angular/core';
import { EmployeeService } from '../../services/employee/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { SpinnerComponent } from "../partials/loader/spinner/spinner.component";

@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
    providers: [EmployeeService],
    imports: [HttpClientModule, ReactiveFormsModule, CommonModule, SpinnerComponent]
})
export class ProfileComponent implements OnInit {
    file:any;
    picture: any;
    isLoading:boolean = false;
    success: boolean = false;
    updateForm = new FormGroup({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      editage: new FormControl(''),
      editaddress: new FormControl(''),
      profile: new FormControl(''),
    });
    editForm: boolean = false;
    id:any;
    first!: string; 
    last!:  string;
    age!:  string;
    address!:  string;
    img!: string;
    imgPath = "http://127.0.0.1:8000/storage/pictures/";
    empData: any;
  constructor(private employee:EmployeeService,@Inject(PLATFORM_ID) private platformId: Object){
    if (isPlatformBrowser(this.platformId)) {
      this.id = sessionStorage.getItem('userId');
    }
  }
  ngOnInit() {
    this.profileLoad();
  }

  profileLoad() {
    this.employee.getProfile(this.id).subscribe((data) => {
      this.empData = data;
      this.first = this.empData.first_name;
      this.last = this.empData.last_name;
      this.age = this.empData.age;
      this.address = this.empData.address;
      this.img = this.empData.profile;
      if(this.img != undefined) {
        this.profile();
      }
      this.updateForm.patchValue({
        first_name:  this.first,
        last_name:  this.last,
        editage:  this.age,
        editaddress: this.address,
      })
    })
  }

  profile() {
    this.employee.getPicture(this.img).subscribe((data) => {
      this.picture = data;
    });
  }
  imageUpload(event: any) {
    this.file = event.target.files[0];
  }
  submit() {
    this.isLoading = true;
    const formData = new FormData();
    const fileFormData = new FormData();
    if (this.file) {
      fileFormData.append('profile', this.file, this.file.name);
      formData.append('first_name', this.updateForm.get('first_name')?.value || '');
      formData.append('last_name', this.updateForm.get('last_name')?.value || '');
      formData.append('editage', this.updateForm.get('editage')?.value || '');
      formData.append('editaddress', this.updateForm.get('editaddress')?.value || '');
      formData.append('profile', this.file);
    }
    this.employee.updateProfile(this.id,formData).subscribe(res => {
      this.success = true;
      this.isLoading = false;
      this.profileLoad();
      this.editForm = false;
    })
  }

  EditFormShow() {
    this.editForm = true;
  }
  EditFormHide() {
    this.editForm = false;
  }
}