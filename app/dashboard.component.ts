import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Festival } from './festival';
import { FestivalService } from './festival.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ],
})

export class DashboardComponent implements OnInit {
  festivals: Festival[] = [];

  constructor(
    private router: Router,
    private festivalService: FestivalService) {
  }


  ngOnInit(): void {
    this.festivalService.getFestivals()
      .then(festivals => this.festivals = festivals.slice(0,4));
  }

  gotoDetail(festival: Festival): void {
    let link = ['/detail', festival.id];
    this.router.navigate(link);
    }

  }
