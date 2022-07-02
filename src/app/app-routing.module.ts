import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDataComponent } from './component/employee-data/employee-data.component';
import { FormComponent } from './component/form/form.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
    { path: '', redirectTo: '/home/data', pathMatch: 'full' },
      { path: 'form', component: FormComponent },
      {path:'data', component:EmployeeDataComponent}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
