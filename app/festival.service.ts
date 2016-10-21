import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Festival } from './festival';

@Injectable()
export class FestivalService {

  private headers = new Headers({'Content-Type': 'application/json'})
  private festivalsUrl = 'app/festivals';

  constructor(private http: Http) { }

  getFestivals(): Promise<Festival[]> {
    return this.http.get(this.festivalsUrl)
               .toPromise()
               .then(response => response.json().data as Festival[])
               .catch(this.handleError);
  }

  create(name: string): Promise<Festival> {
    return this.http
      .post(this.festivalsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(festival: Festival): Promise<Festival> {
    const url = `${this.festivalsUrl}/${festival.id}`;
    return this.http
      .put(url, JSON.stringify(festival), {headers: this.headers})
      .toPromise()
      .then(() => festival)
      .catch(this.handleError);
  }

  getFestivalsSlowly(): Promise<Festival[]> {
  return new Promise<Festival[]>(resolve =>
    setTimeout(resolve, 2000)) // delay 2 seconds
    .then(() => this.getFestivals());
  }

  getFestival(id: number): Promise<Festival> {
    return this.getFestivals()
               .then(festivals => festivals.find(festival => festival.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
