import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-group-example',
  templateUrl: './form-group-example.component.html',
})
export class FormGroupExampleComponent implements OnInit {

  user:string = '';

  formGroup:FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.formGroup = this.formBuilder.group({
      name: ''
    });
  }

  ngOnInit(): void {
  }

  clickMe(){
    this.user = this.formGroup.get('name')?.value;
    console.log('User: ', this.user);
  }
}
