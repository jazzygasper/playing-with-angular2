import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { FestivalSearchService } from './festival-search.service';
import { Festival } from './festival';

@Component({
  moduleId: module.id,
  selector: 'festival-search',
  templateUrl: 'festival-search.component.html',
  styleUrls: [ 'festival-search.component.css' ],
  providers: [FestivalSearchService]
})

export class FestivalSearchComponent implements OnInit {
  festivals: Observable<Festival[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private festivalSearchService: FestivalSearchService,
    private router: Router) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.festivals = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.festivalSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Festival[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Festival[]>([]);
      });
  }

  gotoDetail(festival: Festival): void {
    let link = ['/detail', festival.id];
    this.router.navigate(link);
  }
}
