import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/shared/components/loader/loader.service';


import { ErrorService } from 'src/app/shared/services/error.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  adminForm: FormGroup;
  pass: string = null;

  constructor(
    private router: Router,
    private errorService: ErrorService,
    public adminService: AdminService,
    private http: HttpClient,
    private loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.adminForm = new FormGroup({
      'password': new FormControl(null, Validators.required)
    })
  }



  onLogin(): void {
    const password = this.adminForm.value.password;

    if (!password) {
      return;
    }

    this.http.get(
      'https://onlineschool-bee89-default-rtdb.firebaseio.com/passwords.json'
    ).pipe(this.loaderService.useLoader).subscribe(pas => {
      this.pass = pas[0];

      if ( this.pass === password) {
        this.adminService.isAdminMode = true;
        localStorage.setItem('isAdminMode', 'true');
        this.router.navigate(['/admin/blogPanel']);
        this.adminForm.reset();
      } else {
        this.errorService.errorMessage = 'password is incorrect!';
      }
    })
  }

  onLogout(): void {
    const isAdminMode = JSON.stringify(localStorage.getItem('isAdminMode'));
    if (isAdminMode) {
      localStorage.removeItem('isAdminMode');
    }

    this.adminService.isAdminMode = false;
  }

}
