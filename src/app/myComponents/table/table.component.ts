import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  constructor(private myService: DemoService , private router :Router , private myActiveRoute : ActivatedRoute) {
  }
  student_id = this.myActiveRoute.snapshot.params["id"];
  public students: any
  ngOnInit(): void {
    // console.log(this.myService.GetAllUsers());
    this.myService.GetAllStudents().subscribe({
      next: (value) => { this.students = value; },
      error: (err) => { console.log(err); },
    });
  }

  Delete(id:number){
    if(confirm("Are you sure that you want to delete!!!")){
      this.myService.DeleteStudentById(id).subscribe();
      window.location.reload();
      // this.router.navigateByUrl("/");
    }
  }
}
