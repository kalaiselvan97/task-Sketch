import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieViewComponent } from './movie-view.component';

const routes: Routes = [{ path: '', component: MovieViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieViewRoutingModule { }
