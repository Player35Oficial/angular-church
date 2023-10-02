import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessagesService } from 'src/app/services/messages-service.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  message: any;
  private subscription: Subscription;

  constructor(public messagesService: MessagesService) {
    this.subscription = this.messagesService.message$.subscribe((message) => {
      this.message = message;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
