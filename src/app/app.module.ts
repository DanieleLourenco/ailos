import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthComponent } from './ailos/components/auth/auth.component';
import { SidebarComponent } from './ailos/shared/components/sidebar/sidebar.component';
import { ToolbarComponent } from './ailos/shared/components/toolbar/toolbar.component';
import { SharedModule } from './ailos/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './ailos/components/layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ToolbarComponent,
    AuthComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
