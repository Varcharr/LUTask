import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { usersReducer } from './user-reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('selectedUsers', usersReducer),
  ],
  declarations: [],
})
export class UserStoreModule {}
