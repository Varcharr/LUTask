import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [RouterModule, CommonModule, SharedModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
