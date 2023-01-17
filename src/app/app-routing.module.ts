import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './ailos/components/layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
  {
    path: '**',
    redirectTo: 'layout',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
