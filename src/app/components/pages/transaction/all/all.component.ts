import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faArrowAltCircleLeft,
  faFileInvoiceDollar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent {
  faInvoice = faFileInvoiceDollar;
  faArrowBack = faArrowAltCircleLeft;
}
