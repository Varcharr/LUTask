import { SharedModule } from './../../shared/shared.module';
import { UserService } from './services/user.service';
import { UserRoutingModule } from './user-routing.module';
import { UserFormComponent } from './components/user-form/user-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './pages/users.page';
import { UserGridComponent } from './components/user-grid/user-grid.component';

@NgModule({
  imports: [CommonModule, UserRoutingModule, SharedModule],
  declarations: [UsersPageComponent, UserGridComponent, UserFormComponent],
  providers: [UserService],
})
export class UserModule {}
