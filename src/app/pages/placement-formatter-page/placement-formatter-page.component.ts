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
      // console.log('value', value);
      const regexp: string = value.replace(regex, '');
      if (regexp !== value) {
        obj.name = value;
      } else {
        obj.placementId = value;
      }
      if (obj.name && obj.placementId) {
        obj.email = `${(obj.name.toLowerCase()).replace(regexFormat, '.')}@gmail.com`;
        this.listFormattedPlacements.push(obj);
        obj = {};
      }

      // const foundDuplicate = this.listFormattedPlacements.findIndex((item) =>{
      //   return (item.name === obj.name);
      // });

      // console.log('foundDuplicate', foundDuplicate);
      // if (foundDuplicate >= 0) {
      //   this.listFormattedPlacements[foundDuplicate].email = `${foundDuplicate}${this.listFormattedPlacements[foundDuplicate].email}`;
      // }
      // console.log('duplicate index', foundDuplicate);

      // const newArray: any = this.listFormattedPlacements.reduce((previousValue, currentValue, currentIndex) => {
      //   console.log('previousValue', previousValue);
      //   console.log('currentValue', currentValue);
      //   console.log('currentIndex', currentIndex);
      // });
      // console.log('newArray', newArray);
    });
    this.listFormattedPlacements.sort((a, b) => a.name.localeCompare(b.name));
  }

  onCopyClipboard(value: string): void {
    this._clipboard.copy(value);
    this._snackBar.open('Text copied to clipboard', '', {duration: 1700});
  }
}
