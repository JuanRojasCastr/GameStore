import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  offset: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {
    const verticalOffset = window.pageYOffset;
    this.offset = verticalOffset != 0 ?  true: false;
  }

  navigateHome() {
    this.router.navigate([''])
  }
}
