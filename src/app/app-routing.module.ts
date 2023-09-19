import { SiginComponent } from './components/pages/sigin/sigin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigupComponent } from './components/pages/sigup/sigup.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AllComponent } from './components/pages/transaction/all/all.component';
import { ViewTransactionComponent } from './components/pages/transaction/view-transaction/view-transaction.component';
import { DepositComponent } from './components/pages/transaction/deposit/deposit.component';
import { EditTransactionComponent } from './components/pages/transaction/edit-transaction/edit-transaction.component';

const routes: Routes = [
  {
    path: 'login',
    component: SiginComponent,
  },
  {
    path: 'signup',
    component: SigupComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'transaction/all',
    component: AllComponent,
  },
  {
    path: 'transaction/view/:id',
    component: ViewTransactionComponent,
  },
  {
    path: 'transaction/deposit/:transactionType',
    component: DepositComponent,
  },
  {
    path: 'transaction/edit/:id',
    component: EditTransactionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
