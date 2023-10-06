import { ChurchApiService } from 'src/app/services/church-api.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faArrowCircleLeft,
  faHandHoldingDollar,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { MessagesService } from 'src/app/services/messages-service.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
})
export class DepositComponent {
  faDollar = faHandHoldingDollar;
  faArrowBack = faArrowCircleLeft;
  type!: string;
  userId: number;

  depositForm!: FormGroup;
  value: number | null = 0;

  ngOnInit(): void {
    this.depositForm = new FormGroup({
      type_transaction: new FormControl(this.type, [Validators.required]),
      value: new FormControl([Validators.required]),
      userId: new FormControl([Validators.required]),
    });
  }

  submit() {
    if (this.depositForm.invalid) {
      this.depositForm.invalid;
      return;
    }
    this.userId;

    const { type_transaction, value, userId }: ITransaction =
      this.depositForm.value;
    try {
      this.churchApiService
        .createTransaction(type_transaction, userId, value)
        .subscribe(() => {
          this.router.navigate(['/home']);

          this.messageService.emitCreateSuccessMessage(
            201,
            `${type_transaction.toUpperCase()}  Realizado com Sucesso`
          );
        });
    } catch (e) {
      console.log(e);
    }
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private churchApiService: ChurchApiService,
    private messageService: MessagesService
  ) {
    this.route.params.subscribe((params) => {
      this.type = params['transactionType'];
    });

    this.userId = this.authService.decodeAccessToken().uid;
  }
}

export interface ITransaction {
  type_transaction: string;
  userId: number;
  value: number;
}
