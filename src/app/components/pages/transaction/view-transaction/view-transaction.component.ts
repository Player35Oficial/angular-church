import {
  faArrowCircleLeft,
  faSearchDollar,
} from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {
  ChurchApiService,
  ITransactions,
} from 'src/app/services/church-api.service';

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

  transaction: ITransactions | any = {} as ITransactions;

  transactionId!: string;
  transactionType!: string;
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private apiService: ChurchApiService
  ) {
    this.route.params.subscribe((params) => {
      this.transactionId = params['id'];
      this.transactionType = params['transactionType'];
    });
  }

  ngOnInit() {
    this.apiService
      .getTransaction(this.transactionType, Number(this.transactionId))
      .subscribe((data) => {
        this.transaction = data;
      });

    this.userInSection = this.authService.decodeAccessToken();

    if (this.userInSection.cargo == 'admin') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }
}
