import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs';
import { Person } from '../model/Person';
import { TvShow } from '../model/TvShow';
import { TvshowService } from '../tvshow.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id = 0;
  show: TvShow | undefined;
  episodes: any;
  load = false;
  casts:Person[] = [];
  constructor(private service:TvshowService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => this.id=param['id']);
    this.service.getDetails(this.id).subscribe(s => {
      this.show=s;
      this.episodes = s._embedded['episodes'];
      this.casts = s._embedded.cast.map((data:any) => data['person']);
      this.load=true;
    });
  }

}
