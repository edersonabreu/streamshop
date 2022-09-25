import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  get f() { return this.contactForm.controls; }
  //get contact() { return this.f.contact.controls; }

  isNav = true;
  contactForm!: FormGroup;

  submitted: boolean = false;

  constructor(
    private formBuider: FormBuilder,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuider.group({
      contact: this.formBuider.group({
        name: [null, [Validators.required]],
        email: [null, [Validators.required]],
        tel: [null, [Validators.required]],
        notifications: [null],
        terms: [null, [Validators.required]]
      }),
    })
  }

  onSubmit(){
    this.submitted = true;

    if(!this.contactForm.valid){
      this.openSnackBar('Há campos que necessitam de atenção!', 'Ok');
    }else{
      this.openSnackBar('Cadastro realizado com sucesso!', 'Ok');
    }
  }

  openSnackBar(message: string, action: string){
    this._snackBar.open(message, action);
  }

}
