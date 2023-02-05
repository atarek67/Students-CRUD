import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './myComponents/header/header.component';
import { TableComponent } from './myComponents/table/table.component';
import { AddNewStudentComponent } from './myComponents/add-new-student/add-new-student.component';
import { UpdateStudentComponent } from './myComponents/update-student/update-student.component';
import { ErrorComponent } from './myComponents/error/error.component';
import { StudentDetailsComponent } from './myComponents/student-details/student-details.component';
import { FormsModule } from '@angular/forms';
import { DemoService } from './Services/demo.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    AddNewStudentComponent,
    UpdateStudentComponent,
    ErrorComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
