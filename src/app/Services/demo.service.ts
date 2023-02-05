import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private myClient: HttpClient) { }

  //URl
  private Base_URL = "http://localhost:3000/students";//URL for Users

  //Four Functions
  GetAllStudents() {
    return this.myClient.get(this.Base_URL);
  }

  GetStudentById(id: number) {
    return this.myClient.get(this.Base_URL + "/" + id);
  }
  
  DeleteStudentById(id: number) {
    return this.myClient.delete(this.Base_URL + "/" + id)
  }

  AddStudent(student: any) {
    return this.myClient.post(this.Base_URL, student);
  }
  UpdateStudent(id: number, student: any) {
    return this.myClient.put(this.Base_URL + "/" + id, student);
  }

}
