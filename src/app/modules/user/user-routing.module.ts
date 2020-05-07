import { UserFormComponent } from './components/user-form/user-form.component';
import { UserGridComponent } from './components/user-grid/user-grid.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserGridComponent,
  },
  {
    path: 'new',
    component: UserFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
