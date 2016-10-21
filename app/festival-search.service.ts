import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Festival }           from './festival';

@Injectable()
export class FestivalSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Festival[]> {
    return this.http
               .get(`app/festivals/?name=${term}`)
               .map((r: Response) => r.json().data as Festival[]);
  }
}
