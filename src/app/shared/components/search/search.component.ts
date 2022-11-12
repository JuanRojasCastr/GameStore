import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchQueryService } from '../../services/search-service/search-query.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  haveSearch: boolean = false;

  constructor(private searchService: SearchQueryService) { }

  ngOnInit(): void {
    this.search.valueChanges.subscribe(value => {
      this.haveSearch = value != '' ?  true: false;
    });
  }

  search = new FormControl('');

  sendQuery(value: any) {
    let searchText = value.target.value;
    this.searchService.setSearQuery(searchText == null ? '': searchText);
  }

}
