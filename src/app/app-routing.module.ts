import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewStudentComponent } from './myComponents/add-new-student/add-new-student.component';
import { ErrorComponent } from './myComponents/error/error.component';
import { StudentDetailsComponent } from './myComponents/student-details/student-details.component';
import { TableComponent } from './myComponents/table/table.component';
import { UpdateStudentComponent } from './myComponents/update-student/update-student.component';

const routes: Routes = [
  // {path:'',component:TableComponent},
  {path:'',redirectTo:'students',pathMatch:'full'},
  {path:'students',component:TableComponent},
  {path:'all-students',component:TableComponent},
  {path:'student-details/:id',component:StudentDetailsComponent},
  {path:'add',component:AddNewStudentComponent},
  {path:'update/:id',component:UpdateStudentComponent},
  {path:'**',component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
