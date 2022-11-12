import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchQueryService {

  private searchQuery: string = '';
  private searchQuery$: Subject<string> = new BehaviorSubject('');

  constructor() {
   }

  setSearQuery(value: string) {
    this.searchQuery = value;
    this.searchQuery$.next(this.searchQuery);
  }

  getSearchQuery$(): Observable<string> {
    return this.searchQuery$.asObservable();
  }
}
