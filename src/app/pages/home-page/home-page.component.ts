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
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to.',
  },
  {
    title: 'Group Link Modification',
    link: 'group-link-modification',
    icon: 'format_list_bulleted_add',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to.',
  },
  {
    title: 'Placements Formatter',
    link: 'placement-formatter',
    icon: 'recent_actors',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to.',
  },
  {
    title: 'Audience Network Report Reader',
    link: 'audience-network-report-reader',
    icon: 'format_list_numbered_rtl',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to.',
  },
  {
    title: 'Link Duplicate Remover',
    link: 'link-duplicate-remover',
    icon: 'remove_done',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to.',
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
    this.user = JSON.parse(localStorage.getItem('FACEBOOK_USER'));
    if (!this.user){
      // @ts-ignore
      this.user = JSON.parse(localStorage.getItem('GOOGLE_USER'));
    }
    // console.log('Welcome user =>', this.user);
  }

}
