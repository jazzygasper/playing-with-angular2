import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Festival } from './festival';
import { FestivalService } from './festival.service';


@Component({
  moduleId: module.id,
  selector: 'my-festivals',
  templateUrl: 'festivals.component.html',
  styleUrls: [ 'festivals.component.css' ],
  providers: [FestivalService]
  })

  export class FestivalsComponent implements OnInit{
    festivals: Festival[];
    selectedFestival: Festival;

    constructor(
      private router: Router,
      private festivalService: FestivalService
    ) { }

    getFestivals(): void {
      this.festivalService.getFestivals().then(festivals => this.festivals = festivals);
    }

    ngOnInit(): void {
      this.getFestivals();
    }

    onSelect(festival: Festival): void {
      this.selectedFestival = festival;
    }

    gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedFestival.id]);
    }

  }
