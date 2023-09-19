import {
  faArrowCircleLeft,
  faSearchDollar,
} from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.css'],
})
export class ViewTransactionComponent {
  faSearch = faMagnifyingGlassDollar;
  faArrowBack = faArrowCircleLeft;

  isAdmin: boolean = true;

  transactionId!: string;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.transactionId = params['id'];
    });
  }
}
