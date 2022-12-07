import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user-search',
    pathMatch: 'full',
  },

  {
    path: 'user-search',
    loadChildren: () =>
      import('src/app/user-search/user-search.module').then(
        (m) => m.UserSearchModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
