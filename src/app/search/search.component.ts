import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounce,
  debounceTime,
  delay,
  distinctUntilChanged,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { TvShow } from '../model/TvShow';
import { TvshowService } from '../tvshow.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoreShow } from '../model/ScoreShow';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  scoreShows: ScoreShow[] = [];
  searchField = new FormControl();
  param = '';
  load = true;
  score = 0;

  constructor(
    private service: TvshowService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.searchField.valueChanges
      .pipe(debounceTime(800), distinctUntilChanged())
      .subscribe((val) => this.search(val));
    this.changeParams();
    if (this.param) {
      this.searchField.setValue(this.param);
    }
  }
  search(arg: string) {
    if (arg != '' && arg !== undefined) {
      this.service.getShows(arg).subscribe((data) => {
        this.scoreShows = data;
        this.load = false;
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
  doSearch() {
    this.search(this.searchField.value);
  }
}
