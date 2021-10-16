import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canLoadGuard } from './customGuard';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    canLoad: [canLoadGuard],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
