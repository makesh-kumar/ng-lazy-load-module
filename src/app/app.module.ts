import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';
import { canLoadGuard } from './customGuard';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, RouterModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [canLoadGuard]
})
export class AppModule {}
