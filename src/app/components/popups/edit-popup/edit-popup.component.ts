import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.css'],
})
export class EditPopupComponent {
  transactionType = '';
  value = 0.5;
  id_transaction = 1;
}
