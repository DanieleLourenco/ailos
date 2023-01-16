import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import OnlyNumbersDirective from './only-numbers/only-numbers.directive';
import { CardPipe } from './pipes/card.pipe';
import { CpfPipe } from './pipes/cpf.pipe';
import { SidebarIconsPipe } from './pipes/sidebar-icons.pipe';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    CpfPipe,
    OnlyNumbersDirective,
    SidebarIconsPipe,
    CardPipe,
  ],
  imports: [CommonModule, AppMaterialModule],
  exports: [
    ErrorDialogComponent,
    AppMaterialModule,
    CpfPipe,
    OnlyNumbersDirective,
    SidebarIconsPipe,
    CardPipe,
  ],
})
export class SharedModule {}
