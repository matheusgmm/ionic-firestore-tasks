import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksListPage } from './tasks-list.page';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: TasksListPage,
    canActivateChild: [AuthGuard],
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksListPageRoutingModule {}
