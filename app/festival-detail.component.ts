import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Festival } from './festival';
import { FestivalService }   from './festival.service';

@Component({
  moduleId: module.id,
  selector: 'my-festival-detail',
  templateUrl: 'festival-detail.component.html',
  styleUrls: [ 'festival-detail.component.css' ],
})
export class FestivalDetailComponent implements OnInit {
  festival: Festival;

  constructor(
  private festivalService: FestivalService,
  private route: ActivatedRoute,
  private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.festivalService.getFestival(id)
        .then(festival => this.festival = festival);
    });
  }

  goBack(): void {
  this.location.back();
}

}
