import { SiginComponent } from './components/pages/sigin/sigin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigupComponent } from './components/pages/sigup/sigup.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AllComponent } from './components/pages/transaction/all/all.component';
import { ViewTransactionComponent } from './components/pages/transaction/view-transaction/view-transaction.component';
import { DepositComponent } from './components/pages/transaction/deposit/deposit.component';
import { EditTransactionComponent } from './components/pages/transaction/edit-transaction/edit-transaction.component';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';

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
    canActivate: [authGuard],
  },
  {
    path: 'transaction/all',
    component: AllComponent,
    canActivate: [authGuard],
  },
  {
    path: 'transaction/view/:transactionType/:id',
    component: ViewTransactionComponent,
    canActivate: [authGuard],
  },
  {
    path: 'transaction/deposit/:transactionType',
    component: DepositComponent,
    canActivate: [authGuard],
  },
  {
    path: 'transaction/edit/:id',
    component: EditTransactionComponent,
    canActivate: [authGuard, roleGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
