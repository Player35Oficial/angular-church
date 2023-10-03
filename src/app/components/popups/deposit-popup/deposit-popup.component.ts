import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deposit-popup',
  templateUrl: './deposit-popup.component.html',
  styleUrls: ['./deposit-popup.component.css'],
})
export class DepositPopupComponent {
  transactionType: string = '';

  depositValue: number = 0;

  public setTransactionType(type_transaction: string) {
    this.transactionType = type_transaction;
  }
}
