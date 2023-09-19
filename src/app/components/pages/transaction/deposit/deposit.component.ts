import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  faArrowCircleLeft,
  faHandHoldingDollar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
})
export class DepositComponent {
  faDollar = faHandHoldingDollar;
  faArrowBack = faArrowCircleLeft;
  type!: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.type = params['transactionType'];
    });
  }
}
