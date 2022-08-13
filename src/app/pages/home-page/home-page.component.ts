import { Component, OnInit } from '@angular/core';

export interface Application {
  title: string;
  subtitle?: string;
  description?: string;
  link: string;
  icon?: string;
  image?: string;
  color?: string;
}
// export const applications:
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public user: any = {};

  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    this.user = JSON.parse(localStorage.getItem('USER'));
    console.log('Welcome user =>', this.user);
  }

}
