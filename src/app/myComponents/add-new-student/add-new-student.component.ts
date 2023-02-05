import { Component } from '@angular/core';
import { FormGroup, Validators,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.css']
})
export class AddNewStudentComponent {
  constructor(private myService: DemoService, private router: Router) { }


  // registerationFormValidation = new FormGroup({
  //   name:new FormControl("",[Validators.required, Validators.minLength(3) , Validators.required]),
  //   age:new FormControl("",[Validators.min(20), Validators.max(40), Validators.required]),
  //   email:new FormControl("",[Validators.required , Validators.email])
  // })

  // get NameTrue(){
  //   return this.registerationFormValidation.controls.name.valid;
  // }
  // get AgeTrue(){
  //   return this.registerationFormValidation.controls.age.valid;
  // }
  // get EmailTrue(){
  //   return this.registerationFormValidation.controls.email.valid;
  // }

  Add(name: string, email: any, age: any) {
    let student = { name, email, age };
    // if(this.NameTrue && this.AgeTrue && this.EmailTrue){
      alert("Succfully Add");
      this.myService.AddStudent(student).subscribe();
      this.router.navigateByUrl("/");
    }
    

  // }
}
