import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-link-opener-page',
  templateUrl: './link-opener-page.component.html',
  styleUrls: ['./link-opener-page.component.scss']
})
export class LinkOpenerPageComponent implements OnInit {

  public listGroupIds: string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openLinks(): void {
    const arrayValue = this.listGroupIds.split('\n');
    arrayValue.forEach((link: string) => {
      let customizedLink: string = '';
      if (!link.startsWith('https')) {
        customizedLink = `https://www.facebook.com/groups/${link}/`;
      } else {
        customizedLink = link;
      }
      window.open(customizedLink, '_blank');
    });
  }
}
