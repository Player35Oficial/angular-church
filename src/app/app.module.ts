import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiginComponent } from './components/pages/sigin/sigin.component';
import { SigupComponent } from './components/pages/sigup/sigup.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AllComponent } from './components/pages/transaction/all/all.component';
import { ViewTransactionComponent } from './components/pages/transaction/view-transaction/view-transaction.component';
import { DepositComponent } from './components/pages/transaction/deposit/deposit.component';
import { EditTransactionComponent } from './components/pages/transaction/edit-transaction/edit-transaction.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { JwtModule } from '@auth0/angular-jwt';
import { MessagesComponent } from './components/messages/messages.component';
import { DepositPopupComponent } from './components/popups/deposit-popup/deposit-popup.component';
import { DeletePopupComponent } from './components/popups/delete-popup/delete-popup.component';
import { EditPopupComponent } from './components/popups/edit-popup/edit-popup.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SiginComponent,
    SigupComponent,
    HomeComponent,
    AllComponent,
    ViewTransactionComponent,
    DepositComponent,
    EditTransactionComponent,
    NavigationComponent,
    MessagesComponent,
    DepositPopupComponent,
    DeletePopupComponent,
    EditPopupComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        allowedDomains: ['http://localhost:3333'],
      },
    }),
  ],
  providers: [MessagesComponent, DepositPopupComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
