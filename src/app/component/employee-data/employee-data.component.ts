import { Component, OnInit, Inject} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import {MatDialog} from '@angular/material/dialog';
import { UpdateFormComponent } from '../update-form/update-form.component';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.scss']
})
export class EmployeeDataComponent implements OnInit {
empData : any;

  constructor(private router:Router, private api:ApiService, private _snackBar: MatSnackBar, private dialog: MatDialog) { }

  openSnackBar() {
    this._snackBar.open;
  }

   ngOnInit() {
    this.getEmp();
    }

  add(){
    this.router.navigateByUrl("/home/form");
  }

  getEmp(){
    this.api.getEmployee().subscribe((response)=>{
      this.empData = response;
    })
  }

  deleteEmp(row:any){
    this.api.deleteEmployee(row.id).subscribe((response)=>{
      console.log(response);
      this.getEmp();
      this._snackBar.open('Employee Deleted', '', { duration: 2000 });
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UpdateFormComponent, {
      width: '900px'
    });
  }
}
