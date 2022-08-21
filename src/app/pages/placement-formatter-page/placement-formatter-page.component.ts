import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Clipboard} from '@angular/cdk/clipboard';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-placement-formatter-page',
  templateUrl: './placement-formatter-page.component.html',
  styleUrls: ['./placement-formatter-page.component.scss']
})
export class PlacementFormatterPageComponent implements OnInit {

  public listPlacements: string = '';
  public listFormattedPlacements: any[] = [];
  // @ts-ignore
  @ViewChild('getPlacementGuideDialog') getPlacementGuideDialog: TemplateRef<any>;

  constructor(
    public dialog: MatDialog,
    private _clipboard: Clipboard,
    private _snackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
  }

  openGuide(): void {
    this.dialog.open(this.getPlacementGuideDialog, {autoFocus: false});
  }

  onFormatPlacement(): void {
    const formattedPlacementArray: string [] = this.listPlacements.split('\n');
    let obj: any = {};
    const regex = /[a-zA-Z]+/g;
    const regexFormat = /\s/g;
    formattedPlacementArray.forEach((value: string, index: number) => {
      const regexp: string = value.replace(regex, '');
      if (regexp !== value) {
        obj.name = value;
      } else {
        obj.placementId = value;
      }
      if (obj.name && obj.placementId) {
        obj.email = `${(obj.name.toLowerCase()).replace(regexFormat, '.')}@gmail.com`;

        /** Find if placement has duplicate name, then add string to make it unique */
        const foundDuplicate = this.listFormattedPlacements.find(item => item.name === value);
        console.log('foundDuplicate', foundDuplicate);
        // if (foundDuplicate) {
        //   obj.name = `${obj.name}${index}`;
        //   obj.email = `${(obj.name.toLowerCase()).replace(regexFormat, '.')}${index}@gmail.com`;
        // }
        this.listFormattedPlacements.push(obj);
        obj = {};
      }
    });
    console.log('listFormattedPlacements', this.listFormattedPlacements);
  }

  onCopyClipboard(value: string): void {
    this._clipboard.copy(value);
    this._snackBar.open('Text copied to clipboard', '', {duration: 1700});
  }
}
