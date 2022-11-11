import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  haveSearch: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges.subscribe(value => {
      this.haveSearch = value != '' ?  true: false;
      console.log(this.haveSearch);
      this.searchEmitter.emit(value)
    });
  }

  search = new FormControl('');

  @Output('search') searchEmitter = new EventEmitter<string | null >();

}
