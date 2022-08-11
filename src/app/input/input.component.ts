import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      


export class InputComponent implements OnInit {
  disabledProp:Boolean = false;
  checkedProp:Boolean = false;


  userNgModel:String = '';

  constructor() { }

  ngOnInit(): void {
  }

  clickMeNgModel(): void {
    console.log('The userNgModel is: ', this.userNgModel);
  }

  toogleCheckbox(): void {
    this.checkedProp = !this.checkedProp;
  }
  
  printCheckboxValue({ target }:Event): void {
    console.log( (<HTMLInputElement>target).value );
    
  }
}
