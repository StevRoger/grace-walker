import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Clipboard} from "@angular/cdk/clipboard";

@Component({
  selector: 'app-link-duplicate-remover-page',
  templateUrl: './link-duplicate-remover-page.component.html',
  styleUrls: ['./link-duplicate-remover-page.component.scss']
})
export class LinkDuplicateRemoverPageComponent implements OnInit {
  listLinks: string = '';
  constructor(
    private _MatSnackBar: MatSnackBar,
    private _Clipboard: Clipboard
  ) { }

  ngOnInit(): void {
  }

  onFormatLink(): void {
    const formattedPlacementArray: string [] = this.listLinks.split('\n');
    const result: string [] = [...new Set(formattedPlacementArray)];
    this._Clipboard.copy(result.join("\r\n"));
    this._MatSnackBar.open('Links have been formatted and copied in to your clipboard!', 'Ok', {duration: 4000});
  }
}
