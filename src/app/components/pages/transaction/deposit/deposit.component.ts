import { Component } from '@angular/core';
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
})
export class DepositComponent {
  faDollar = faHandHoldingDollar;
}
