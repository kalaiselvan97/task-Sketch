import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'movieList',
    loadChildren: () =>
      import('./movie-list/movie-list.module').then((m) => m.MovieListModule),
  },
  {
    path: 'movieView/:id',
    loadChildren: () =>
      import('./movie-view/movie-view.module').then((m) => m.MovieViewModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
