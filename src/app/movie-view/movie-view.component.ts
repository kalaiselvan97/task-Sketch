import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css'],
})
export class MovieViewComponent implements OnInit {
  movieData: any;
  movieId!: number;

  constructor(
    private service: ServiceService,
    private router: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((id: any) => {
      this.movieId = id.id;
      this.getDataById(this.movieId);
    });
  }

  getDataById(movieId: number) {
    this.service.getDataById(movieId).subscribe({
      next: (data) => {
        this.movieData = data;
        this.movieData.poster_path =
          'https://image.tmdb.org/t/p/original' + this.movieData.poster_path;

        this.movieData.vote_average = Number(this.movieData.vote_average) / 2;
        console.log(this.movieData);
      },
      error: (e) => console.error(e),
    });
  }
  backClicked() {
    this._location.back();
  }
}
