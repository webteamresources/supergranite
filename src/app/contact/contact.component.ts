import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  signupForm: FormGroup;
  url = 'https://supergranitesmarbles.firebaseio.com/formdata.json';

  constructor(private http:HttpClient) { }
  pgTitle = 'Contact';
  formSubmitted;
  ngOnInit() {
    this.formSubmitted = false;
    this.signupForm = new FormGroup ({
      'fname' : new FormControl(null, Validators.required),
      'lname' : new FormControl(null, Validators.required),
      'subject' : new FormControl(null, Validators.required),
      'phone' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, Validators.required),
      'message' : new FormControl(null)
    });
  }
  onSubmit() {
    const formdata = this.signupForm.value;
    this.http.post(this.url, formdata)
    .subscribe(
      response => {
        this.formSubmitted = true;
        console.log(response);
      },
      (err: HttpErrorResponse) => {
        this.formSubmitted = false;
        console.log (err.message);
      }
    )    
  }
}
