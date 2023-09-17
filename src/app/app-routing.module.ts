import { SiginComponent } from './components/pages/sigin/sigin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigupComponent } from './components/pages/sigup/sigup.component';

const routes: Routes = [
  {
    path: 'login',
    component: SiginComponent,
  },
  {
    path: 'signup',
    component: SigupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
