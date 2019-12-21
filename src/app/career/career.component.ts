import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  private _signupForm: FormGroup;
  public get signupForm(): FormGroup {
    return this._signupForm;
  }
  public set signupForm(value: FormGroup) {
    this._signupForm = value;
  }
  formUrl = '../../assets/career.php';
  constructor(private httpService: HttpClient) { }
  pgTitle = 'Career';
  ngOnInit() {
    this.signupForm = new FormGroup ({
      'fname' : new FormControl(null, Validators.required),
      'lname' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, Validators.required),
      'phone' : new FormControl(null, Validators.required),
      'upload' : new FormControl(null, Validators.required),
      //'hobbies' : new FormArray([])
    });
  }

  onSubmit() {    
    const formData = this.signupForm.value;
    console.log(formData);
  }

  // onAddHobby() {
  //   const control = new FormControl(null, Validators.required);
  //   (<FormArray>this.signupForm.get('hobbies')).push(control);
  // }
}
