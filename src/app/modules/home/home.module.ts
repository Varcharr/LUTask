import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home.page';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [HomePageComponent],
})
export class HomeModule {}
