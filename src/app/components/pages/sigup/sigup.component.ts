import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css'],
})
export class SigupComponent {
  newUserForm!: FormGroup;

  ngOnInit(): void {
    this.newUserForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
    });
  }

  get username() {
    return this.newUserForm.get('username')!;
  }

  get email() {
    return this.newUserForm.get('email')!;
  }

  get password() {
    return this.newUserForm.get('password')!;
  }

  get role() {
    return this.newUserForm.get('role')!;
  }

  submit() {
    if (this.newUserForm.invalid) {
      console.log(this.newUserForm.errors);
      return;
    }
    console.log(this.newUserForm.value);
    console.log('formulário enviado!');
  }
}
