import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ChurchApiService } from 'src/app/services/church-api.service';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages-service.service';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css'],
})
export class SigupComponent {
  newUserForm!: FormGroup;

  constructor(
    private apiService: ChurchApiService,
    private router: Router,
    private messageService: MessagesService
  ) {}

  ngOnInit(): void {
    this.newUserForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
      cargo: new FormControl('', [Validators.required]),
    });
  }

  get nome() {
    return this.newUserForm.get('nome')!;
  }

  get email() {
    return this.newUserForm.get('email')!;
  }

  get senha() {
    return this.newUserForm.get('senha')!;
  }

  get cargo() {
    return this.newUserForm.get('cargo')!;
  }

  submit() {
    if (this.newUserForm.invalid) {
      this.newUserForm;
      return;
    }
    const body = this.newUserForm.value;

    this.apiService.createUser(body).subscribe(() => {
      this.router.navigate(['/login']);
      this.messageService.emitCreateSuccessMessage(
        201,
        'Usuário criado com sucesso, faça login!'
      );
    });
    ('formulário enviado!');
  }
}
