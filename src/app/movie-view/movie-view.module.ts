import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieViewRoutingModule } from './movie-view-routing.module';
import { MovieViewComponent } from './movie-view.component';

@NgModule({
  declarations: [MovieViewComponent],
  imports: [CommonModule, MovieViewRoutingModule],
})
export class MovieViewModule {}
