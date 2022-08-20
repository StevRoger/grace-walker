import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-placement-formatter-page',
  templateUrl: './placement-formatter-page.component.html',
  styleUrls: ['./placement-formatter-page.component.scss']
})
export class PlacementFormatterPageComponent implements OnInit {

  public listPlacements: string = '';
  // @ts-ignore
  @ViewChild('getPlacementGuideDialog') getPlacementGuideDialog: TemplateRef<any>;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openGuide(): void {
    this.dialog.open(this.getPlacementGuideDialog, {autoFocus: false});
  }

  onFormatPlacement(): void {
    const formattedPlacementArray: string [] = this.listPlacements.split('\n');
    console.log('formattedPlacementArray', formattedPlacementArray);
  }
}
