import {
  faArrowCircleLeft,
  faHandHoldingDollar,
} from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ChurchApiService,
  ITransactions,
} from 'src/app/services/church-api.service';
import { MessagesService } from 'src/app/services/messages-service.service';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.css'],
})
export class EditTransactionComponent {
  faDollar = faHandHoldingDollar;

  faArrowBack = faArrowCircleLeft;

  currentTransaction: ITransactions | any = {} as ITransactions;
  editForm!: FormGroup;

  transactionId: string = '';
  transactionType: string = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ChurchApiService,
    private messagesService: MessagesService
  ) {
    this.route.params.subscribe((params) => {
      this.transactionId = params['id'];
      this.transactionType = params['transactionType'];
    });

    this.editForm = new FormGroup({
      valor: new FormControl(),
    });
  }

  ngOnInit() {
    this.apiService
      .getTransaction(this.transactionType, Number(this.transactionId))
      .subscribe((data) => {
        this.currentTransaction = data;
      });
  }

  submit() {
    this.editForm.value.value;
    this.currentTransaction;
    try {
      this.apiService
        .updateTransaction(
          this.currentTransaction.id_tipos_transacao,
          this.currentTransaction.id,
          this.editForm.value
        )
        .subscribe();
      this.redirectToAll();
      this.messagesService.emitTransactionUpdatedMessage();
    } catch (error) {
      console.log(error);
    }
  }

  redirectToAll() {
    this.router.navigate(['/transaction/all']);
  }
}
