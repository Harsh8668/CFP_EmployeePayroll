import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.scss']
})
export class EmployeeDataComponent implements OnInit {
empData : any;
  constructor(private router:Router, private api:ApiService) { }

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
      
    })
  }

}
