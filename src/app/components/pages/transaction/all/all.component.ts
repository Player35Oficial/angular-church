import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {
  faArrowAltCircleLeft,
  faFileInvoiceDollar,
} from '@fortawesome/free-solid-svg-icons';
import { tap } from 'rxjs';
import { ChurchApiService } from 'src/app/services/church-api.service';

const fakeTransactions = [
  {
    id: 1,
    id_usuario: 1,
    id_tipos_transacao: 'dizimo',
    valor: 150,
    data: 8900000,
  },
];

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent {
  faInvoice = faFileInvoiceDollar;
  faArrowBack = faArrowAltCircleLeft;
  public transactions: ITransaction[] = [];
  public displayedColumns = [
    // 'id',
    // 'id_usuario',
    'id_tipos_transacao',
    'valor',
    'data',
    'actions',
  ];
  // public dataSource = new MatTableDataSource(this.transactions);

  constructor(private apiService: ChurchApiService) {}

  ngOnInit() {
    this.apiService
      .getAllTransactions()
      .pipe(tap((data) => console.log(data)))
      .subscribe((data) => {
        // data.forEach((item) => this.transactions.push(item));
        this.transactions = data;
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
