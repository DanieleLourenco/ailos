import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './ailos/components/auth/auth.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: '**',
    redirectTo: 'auth',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
