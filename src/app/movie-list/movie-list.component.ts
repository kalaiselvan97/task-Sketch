import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  listdata: any;
  searchValue: any;
  pageNumber = 1;
  constructor(private Service: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.getListData(this.pageNumber);
  }

  getListData(pageNumber: number) {
    this.Service.getListData(pageNumber).subscribe({
      next: (data) => {
        this.listdata = data;
        this.listdata.results.map((x: any) => {
          x.poster_path = 'https://image.tmdb.org/t/p/original' + x.poster_path;
          x.vote_average = Number(x.vote_average) / 2;
        });
        console.log(this.listdata);
      },
      error: (e) => console.error(e),
    });
  }

  openView(data: any) {
    this.router.navigate(['movieView/' + data.id]);
  }

  Search() {
    this.getDataBySearch(this.searchValue);
  }
  getDataBySearch(searchValue: string) {
    this.Service.getDataBySearch(searchValue).subscribe({
      next: (data) => {
        this.listdata = data;
        this.listdata.results.map((x: any) => {
          x.poster_path = 'https://image.tmdb.org/t/p/original' + x.poster_path;
          x.vote_average = Number(x.vote_average) / 2;
        });
        console.log(this.listdata);
      },
      error: (e) => console.error(e),
    });
  }

  page(number: number) {
    console.log(number, 'page');
    this.pageNumber = number;
    this.getListData(this.pageNumber);
  }

  pageDecrement() {
    if (this.pageNumber !== 1) {
      this.pageNumber--;
    }
    this.getListData(this.pageNumber);
  }
  pageIncrement() {
    if (this.pageNumber !== 6) {
      this.pageNumber++;
    }
    this.getListData(this.pageNumber);
  }
}
