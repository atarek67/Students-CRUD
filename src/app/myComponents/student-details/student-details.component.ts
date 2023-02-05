import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  Student_id: any;
  student_detail: any;
  constructor(myActivated: ActivatedRoute, private myService: DemoService) {
    this.Student_id = myActivated.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.myService.GetStudentById(this.Student_id).subscribe({
      next: (result) => {
        this.student_detail = result;
      },
      error: (err) => { },
    })

  }
}
