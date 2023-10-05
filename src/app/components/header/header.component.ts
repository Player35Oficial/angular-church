import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  faLogout = faArrowRightFromBracket;

  constructor(private authService: AuthService, private router: Router) {}

  isLoginPage() {
    return this.router.url.includes('login');
  }

  isSignUpPage() {
    return this.router.url.includes('signup');
  }

  logout() {
    this.authService.clearAccessToken();
    this.router.navigate(['/login']);
  }
}
