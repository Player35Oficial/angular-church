import { SiginComponent } from './components/pages/sigin/sigin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigupComponent } from './components/pages/sigup/sigup.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AllComponent } from './components/pages/transaction/all/all.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
