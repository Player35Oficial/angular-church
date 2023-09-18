import { faSearchDollar } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.css'],
})
export class ViewTransactionComponent {
  faSearch = faMagnifyingGlassDollar;
}
