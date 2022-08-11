import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  // template: '<p>employee works!</p>',
  // styles: [ 'p { background-color: green }' ]
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  private age:number = 14;

  constructor() { }

  ngOnInit(): void {
  }

  getAge(){
    return this.age;
  }
}
