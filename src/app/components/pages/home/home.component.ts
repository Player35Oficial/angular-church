import { Component } from '@angular/core';
import {
  faFileInvoiceDollar,
  faHandHoldingDollar,
  faHandHoldingHeart,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  faInvoice = faFileInvoiceDollar;
  faHoldingDollar = faHandHoldingDollar;
  faHoldingHeart = faHandHoldingHeart;
}
