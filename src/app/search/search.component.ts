import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounce,
  debounceTime,
  distinctUntilChanged,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { TvShow } from '../model/TvShow';
import { TvshowService } from '../tvshow.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  shows: TvShow[] = [];
  searchField = new FormControl();
  param = '';

  constructor(
    private service: TvshowService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchField.valueChanges
      .pipe(debounceTime(850), distinctUntilChanged())
      .subscribe((val) => this.search(val));
    this.changeParams();
    if(this.param)
    {
      this.searchField.setValue(this.param);
      this.search(this.param);
    }
  }
  search(arg: string) {
    if (arg != '') {
      this.service.getShows(arg).subscribe((data) => {
        this.shows = data.map((data) => data.show);
        this.router.navigate(['search'], { queryParams: { q: arg } });
      });
      this.changeParams();
    }
  }
  changeParams() {
    this.route.queryParams.subscribe((param) => {
      this.param = param['q'];
    });
  }
}
