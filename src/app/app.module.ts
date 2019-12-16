import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { UsermgmtService } from './service/usermgmt.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UserModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ UsermgmtService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
