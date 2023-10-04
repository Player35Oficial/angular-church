import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor() {}

  private messageSubject = new BehaviorSubject<any>({
    httpCode: 0,
    messageTitle: '',
    httpMessage: '',
  });

  message$ = this.messageSubject.asObservable();

  public emitAuthCredentialshttpMessage(httpCode: number, httpMessage: string) {
    this.messageSubject.next({
      httpCode: httpCode,
      messageTitle: 'NÃO AUTORIZADO',
      httpMessage: httpMessage,
    });
    setTimeout(() => this.clear(), 3000);
  }

  public emitRestrictAccesshttpMessage(httpCode: number, httpMessage: string) {
    this.messageSubject.next({
      httpCode: httpCode,
      messageTitle: 'NÃO AUTORIZADO',
      httpMessage: httpMessage,
    });
    setTimeout(() => this.clear(), 3000);
  }

  public emitBadRequesthttpMessage(httpCode: number, httpMessage: string) {
    this.messageSubject.next({
      httpCode: httpCode,
      messageTitle: 'ERRO: BAD REQUEST',
      httpMessage: httpMessage,
    });
    setTimeout(() => this.clear(), 3000);
  }

  public emitInternalServerhttpMessage(httpCode: number, httpMessage: string) {
    this.messageSubject.next({
      httpCode: httpCode,
      messageTitle: 'ERRO NOSSO :(',
      httpMessage: httpMessage,
    });
    setTimeout(() => this.clear(), 3000);
  }

  public emitAuthenticatedMessage() {
    this.messageSubject.next({
      httpCode: 200,
      messageTitle: 'AUTORIZADO',
      httpMessage: 'Autenticado com sucesso',
    });
    setTimeout(() => this.clear(), 3000);
  }

  public emitCreateSuccessMessage(httpCode: number, httpMessage: string) {
    this.messageSubject.next({
      httpCode: httpCode,
      messageTitle: 'REGISTRO CONCLUÍDO',
      httpMessage: httpMessage,
    });
    setTimeout(() => this.clear(), 3000);
  }

  public emitTransactionSuccessMessage(httpCode: number, httpMessage: string) {
    this.messageSubject.next({
      httpCode: httpCode,
      messageTitle: 'TRANSAÇÂO CONCLUÍDO',
      httpMessage: httpMessage,
    });
    setTimeout(() => this.clear(), 3000);
  }

  public emitTransactionUpdatedMessage() {
    this.messageSubject.next({
      httpCode: 201,
      messageTitle: 'REGISTRO ATUALIZADO',
      httpMessage: 'Registro atualizado com sucesso!',
    });

    setTimeout(() => this.clear(), 3000);
  }

  private clear() {
    this.messageSubject.next({
      httpCode: 0,
      messageTitle: '',
      httpMessage: '',
    });
  }
}
