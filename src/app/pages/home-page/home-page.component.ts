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
export const applications: Application [] = [
  {
    title: 'Link Opener',
    link: 'link-opener',
    icon: 'launch',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.',
  },
  {
    title: 'Group Link Modification',
    link: 'group-link-modification',
    icon: 'format_list_bulleted_add',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.',
  },
  {
    title: 'Placements Formatter',
    link: 'placement-formatter',
    icon: 'recent_actors',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.',
  },
];

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public user: any = {};
  public apps: Application[] = applications;

  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    this.user = JSON.parse(localStorage.getItem('USER'));
    console.log('Welcome user =>', this.user);
  }

}
