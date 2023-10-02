import {
  faArrowCircleLeft,
  faSearchDollar,
} from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.css'],
})
export class ViewTransactionComponent {
  faSearch = faMagnifyingGlassDollar;
  faArrowBack = faArrowCircleLeft;

  isAdmin: boolean = true;

  userInSection: any;
  userRole: string = '';

  transactionId!: string;
  constructor(private route: ActivatedRoute, private authService: AuthService) {
    this.route.params.subscribe((params) => {
      this.transactionId = params['id'];
    });
  }

  ngOnInit() {
    this.userInSection = this.authService.decodeAccessToken();

    if (this.userInSection.cargo == 'admin') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }
}
