import { NgModule } from '@angular/core';
import { UserStoreModule } from './user-store/user-store.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [UserStoreModule, StoreModule.forRoot({})],
  declarations: [],
})
export class RootStoreModule {}
