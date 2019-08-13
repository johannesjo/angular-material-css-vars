import {Component} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDarkTheme = false;
  lastDialogResult: string;
  mode: string;
  value: number;

  foods: any[] = [
    {name: 'Pizza', rating: 'Excellent'},
    {name: 'Burritos', rating: 'Great'},
    {name: 'French fries', rating: 'Pretty good'},
  ];

  public selectedValue: string;

  public games = [
    {value: 'rts-0', viewValue: 'Starcraft'},
    {value: 'rpg-1', viewValue: 'Baldur\'s Gate'},
    {value: 'fps-2', viewValue: 'Doom'}
  ];

  public progress = 0;
  public slider = {
    autoTicks: false,
    disabled: false,
    invert: false,
    max: 100,
    min: 0,
    showTicks: false,
    step: 1,
    thumbLabel: false,
    value: 0,
    vertical: false,
    tickInterval: 1,
    checked: true
  };
  public tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  public color: string;

  public availableColors = [
    {name: 'none', color: ''},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'}
  ];

  constructor(private _dialog: MatDialog,
              private _snackbar: MatSnackBar) {
    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }

  get tickInterval(): number | 'auto' {
    return this.slider.showTicks ? (this.slider.autoTicks ? 'auto' : this.slider.tickInterval) : null;
  }

  set tickInterval(v) {
    this.slider.tickInterval = Number(v);
  }

  openDialog() {
    // const dialogRef = this._dialog.open(DialogContentComponent);
    //
    // dialogRef.afterClosed().subscribe(result => {
    //   this.lastDialogResult = result;
    // });
  }

  showSnackbar() {
    this._snackbar.open('YUM SNACKS', 'CHEW');
  }
}
