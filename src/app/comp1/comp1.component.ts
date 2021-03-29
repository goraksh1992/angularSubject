import { Component, OnInit } from '@angular/core';
import { SubjectServiceService } from '../subjectService/subject-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private _subService:SubjectServiceService) { 
    this._subService.uname.subscribe(name => {
      this.usename = name
    })
  }

  ngOnInit(): void {
  }

  usename: string = ""

  changeName(name: any){
    // this.usename = name.value
    this._subService.uname.next(name.value)
  }

}
