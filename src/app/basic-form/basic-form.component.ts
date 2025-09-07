import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.css'
})
export class BasicFormComponent {
  name = new FormControl('monali');
  password=new FormControl('12345');

  getValue(){
    console.log(this.name.value)
    console.log(this.password.value)
  }

  profileForm= new FormGroup({
      fname : new FormControl('',[Validators.required]),
      fpassword:new FormControl('',[Validators.required,Validators.minLength(5)]),
      femail:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])
  })

  onSubmit(){
    console.log("onsubmit called")
    console.log(this.profileForm.value)
  }

  get fname(){
    return this.profileForm.get('fname')
  }

  get femail(){
    return this.profileForm.get('femail')
  }

  get fpassword(){
    return this.profileForm.get('fpassword')
  }

}
