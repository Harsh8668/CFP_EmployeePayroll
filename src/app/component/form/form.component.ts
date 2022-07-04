import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { formModel } from './form.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  registerForm!: FormGroup;
  formModelObj : formModel = new formModel();  
  submitted = false;
  empData : any;

  constructor( private formBuilder: FormBuilder, private api:ApiService, private router:Router, private _snackBar: MatSnackBar) { }

   ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: [''],
            gender: [''],
            dept: [''],
            salary: [''],
            date: [''],
            month: [''],
            year: [''],

        });
    }

    get f() { return this.registerForm.controls; }

    onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
}

openSnackBar() {
  this._snackBar.open;
}

postEmp(){
  this.formModelObj.name = this.registerForm.value.name;
  this.formModelObj.gender = this.registerForm.value.gender;
  this.formModelObj.dept = this.registerForm.value.dept;
  this.formModelObj.date = this.registerForm.value.date;
  this.formModelObj.month = this.registerForm.value.month;
  this.formModelObj.year = this.registerForm.value.year;
  this.formModelObj.salary = this.registerForm.value.salary;

  this.api.postEmployee(this.formModelObj).subscribe((response)=>{
    console.log(response);
    this.registerForm.reset();
    this.router.navigateByUrl("/home")
    this._snackBar.open('Employee Added', '', { duration: 2000 });

  })
}

}
