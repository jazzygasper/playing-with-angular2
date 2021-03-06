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

    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.festivalService.create(name)
        .then(festival => {
          this.festivals.push(festival);
          this.selectedFestival = null;
        });
    }

    delete(festival: Festival): void {
      this.festivalService
        .delete(festival.id)
        .then(() => {
          this.festivals = this.festivals.filter(f => f !== festival);
          if (this.selectedFestival === festival) { this.selectedFestival = null; }
      });
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
