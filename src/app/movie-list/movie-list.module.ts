import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListRoutingModule } from './movie-list-routing.module';
import { MovieListComponent } from './movie-list.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [MovieListComponent],
  imports: [
    CommonModule,
    MovieListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
})
export class MovieListModule {}
