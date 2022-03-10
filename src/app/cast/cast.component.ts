import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../model/Person';
import { TvshowService } from '../tvshow.service';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {
  casts:Person[] = [];
  id = 0;
  constructor(private service:TvshowService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => this.id=param['id']);
    
    this.service.getCasts(this.id).subscribe(p => {
      this.casts = p;
      console.log(p);
    });
  }

}
