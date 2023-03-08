import { Component, OnInit } from '@angular/core';
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-credit-dialog',
  templateUrl: './credit-dialog.component.html',
  styleUrls: ['./credit-dialog.component.scss']
})
export class CreditDialogComponent implements OnInit {

  faHeart = faHeart;
  constructor() { }

  ngOnInit(): void {
  }

}
