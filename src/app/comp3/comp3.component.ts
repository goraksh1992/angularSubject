import { Component, OnInit } from '@angular/core';
import { SubjectServiceService } from '../subjectService/subject-service.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor(private _subService:SubjectServiceService) { 
    this._subService.uname.subscribe(name => {
      this.usename = name
    })
  }

  ngOnInit(): void {
  }

  usename = ""

  changeName(name: any){
    // this.usename = name.value
    this._subService.uname.next(name.value)
  }

}
