import { Component, OnInit } from '@angular/core';
import { SubjectServiceService } from '../subjectService/subject-service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

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
