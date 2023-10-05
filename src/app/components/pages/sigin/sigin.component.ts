import { MessagesService } from './../../../services/messages-service.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ChurchApiService } from 'src/app/services/church-api.service';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css'],
})
export class SiginComponent {
  loginForm!: FormGroup;

  constructor(
    private churchApiService: ChurchApiService,
    private authService: AuthService,
    private messagesService: MessagesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  submit() {
    if (this.loginForm.invalid) {
      return;
    }
    const { email, password } = this.loginForm.value;

    this.churchApiService.login(email, password).subscribe(
      (response) => {
        if (response && response.accessToken) {
          const accessToken = response.accessToken;
          this.authService.setAccessToken(accessToken);
        } else {
          console.error(response.body.errors);
        }
        this.loginForm.value;
        ('enviou formulário');
        this.messagesService.emitAuthenticatedMessage();
        this.router.navigate(['/home']);
      },
      (error) => {
        error;
        // http code
        const httpStatusCode = error.status;
        let errorMessage = '';
        // error message
        if (error.error.errors.default) {
          errorMessage = error.error.errors.default;
        } else {
          errorMessage = error.error.errors.body;
        }
        this.messagesService.emitAuthCredentialshttpMessage(
          httpStatusCode,
          errorMessage
        );
      }
    );
  }
}
