import { SiginComponent } from './components/pages/sigin/sigin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigupComponent } from './components/pages/sigup/sigup.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AllComponent } from './components/pages/transaction/all/all.component';
import { ViewTransactionComponent } from './components/pages/transaction/view-transaction/view-transaction.component';

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
    path: 'transaction/:id',
    component: ViewTransactionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
