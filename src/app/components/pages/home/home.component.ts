import { Component } from '@angular/core';
import {
  faFileInvoiceDollar,
  faHandHoldingDollar,
  faHandHoldingHeart,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  faInvoice = faFileInvoiceDollar;
  faHoldingDollar = faHandHoldingDollar;
  faHoldingHeart = faHandHoldingHeart;
}
