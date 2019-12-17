import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  signupForm: FormGroup;
  constructor() { }
  pgTitle = 'Contact';
  ngOnInit() {
    this.signupForm = new FormGroup ({
      'fname' : new FormControl(null, Validators.required),
      'lname' : new FormControl(null, Validators.required),
      'subject' : new FormControl(null),
      'message' : new FormControl(null, Validators.required),
      //'hobbies' : new FormArray([])
    });
  }
  onSubmit() {   
    const formData = this.signupForm.value;
    console.log(formData);
  }
  // onSubmit() {
  //   this.httpService.post<any>(this.formUrl, this.signupForm).subscribe(
  //     (res) => console.log(res),
  //     (err) => console.log(err)
  //     );
      
  //   console.log(this.signupForm);
  // }

  // onAddHobby() {
  //   const control = new FormControl(null, Validators.required);
  //   (<FormArray>this.signupForm.get('hobbies')).push(control);
  // }
}
