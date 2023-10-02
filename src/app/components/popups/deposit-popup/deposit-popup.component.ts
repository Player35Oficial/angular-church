import { Component } from '@angular/core';

@Component({
  selector: 'app-deposit-popup',
  templateUrl: './deposit-popup.component.html',
  styleUrls: ['./deposit-popup.component.css'],
})
export class DepositPopupComponent {
  transactionType = '';
  depositValue = 0.5;
}
