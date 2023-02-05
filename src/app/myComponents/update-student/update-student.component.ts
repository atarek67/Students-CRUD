import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  constructor(private myService: DemoService, private router: Router, private activeParam: ActivatedRoute) { }
  editStudent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
  })
  student_ID = this.activeParam.snapshot.params["id"];
  public singleStudent: any;
  ngOnInit(): void {
    this.myService.GetStudentById(this.student_ID).subscribe({
      next: (result: any) => {
        this.editStudent = new FormGroup({
          name: new FormControl(result['name']),
          email: new FormControl(result['email']),
          age: new FormControl(result['age']),
        })
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  Update() {
    // if (confirm("are u sure?")) {
      this.myService.UpdateStudent(this.student_ID, this.editStudent.value).subscribe({
        next: () => {
          this.router.navigateByUrl("/");
        }
      })
    }
  // }
}

