import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faArrowAltCircleLeft,
  faFileInvoiceDollar,
} from '@fortawesome/free-solid-svg-icons';
import { ChurchApiService } from 'src/app/services/church-api.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent {
  faInvoice = faFileInvoiceDollar;
  faArrowBack = faArrowAltCircleLeft;

  transactions: ITransaction[] = [];

  constructor(private apiService: ChurchApiService) {}

  ngOnInit() {
    this.apiService.getAllTransactions().subscribe((data) => {
      data.forEach((item) => this.transactions.push(item));
    });
  }
}

export interface ITransaction {
  id: number;
  id_usuario: number;
  id_tipos_transacao: string;
  valor: number;
  data: number;
}
