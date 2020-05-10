import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [RouterModule, CommonModule, SharedModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    BrowserAnimationsModule,
    SharedModule,
    BrowserModule,
    HttpClientModule,
  ],
})
export class CoreModule {}
