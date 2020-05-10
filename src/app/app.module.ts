import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RootStoreModule } from './store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    RootStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
