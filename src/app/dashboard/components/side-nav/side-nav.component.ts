import { Component, OnInit } from '@angular/core';
const MAX_WIDTH = 720;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  links = [{
    name: 'Invoices',
    url: 'invoices'
  },
  {
    name: 'Clients',
    url: 'clients'
  }
  ]

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width:${MAX_WIDTH}px)`)

  constructor() { }

  ngOnInit() {
  }

  isScreenSmall() {

    return this.mediaMatcher.matches
  }
}
