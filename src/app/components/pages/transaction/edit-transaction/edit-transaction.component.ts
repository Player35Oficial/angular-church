import {
  faArrowCircleLeft,
  faHandHoldingDollar,
} from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.css'],
})
export class EditTransactionComponent {
  faDollar = faHandHoldingDollar;

  faArrowBack = faArrowCircleLeft;

  transactionId!: string;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.transactionId = params['id'];
    });
  }
}
