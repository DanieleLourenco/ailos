import { SharedModule } from './ailos/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './ailos/components/auth/auth.component';
import { SidebarComponent } from './ailos/shared/components/sidebar/sidebar.component';
import { ToolbarComponent } from './ailos/shared/components/toolbar/toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ToolbarComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    FormsModule

  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
