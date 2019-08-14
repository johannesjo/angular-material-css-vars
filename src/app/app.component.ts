import {Component} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {MaterialCssVarsService} from '../../projects/material-css-vars/src/lib/material-css-vars.service';
import {HueValue} from '../../projects/material-css-vars/src/lib/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDarkTheme = false;
  isAutoContrast = true;


  lastDialogResult: string;
  mode: string;
  value: number;

  foods: any[] = [
    {name: 'Pizza', rating: 'Excellent'},
    {name: 'Burritos', rating: 'Great'},
    {name: 'French fries', rating: 'Pretty good'},
  ];

  threshold: HueValue;

  hues = [
    {value: '50', viewValue: '50'},
    {value: '100', viewValue: '100'},
    {value: '200', viewValue: '200'},
    {value: '300', viewValue: '300'},
    {value: '400', viewValue: '400'},
    {value: '500', viewValue: '500'},
    {value: '600', viewValue: '600'},
    {value: '700', viewValue: '700'},
    {value: '800', viewValue: '800'},
    {value: '900', viewValue: '900'},
    {value: 'A100', viewValue: 'A100'},
    {value: 'A200', viewValue: 'A200'},
    {value: 'A400', viewValue: 'A400'},
    {value: 'A700', viewValue: 'A700'},
  ];

  progress = 0;
  slider = {
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
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  color: string;

  availableColors = [
    {name: 'none', color: ''},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'}
  ];

  primary = '#3f51b5';
  accent = '#ff4081';

  constructor(
    private _dialog: MatDialog,
    private _snackbar: MatSnackBar,
    public materialCssVarsService: MaterialCssVarsService,
  ) {
    this.onPrimaryChange(this.primary);
    this.onAccentChange(this.accent);


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

  onPrimaryChange(hex: string) {
    this.primary = hex;
    this.materialCssVarsService.changePrimary(hex);
  }

  onAccentChange(hex: string) {
    this.accent = hex;
    this.materialCssVarsService.changeAccent(hex);
  }

  onChangeThreshold(threshold: HueValue) {
    this.threshold = threshold;
    this.materialCssVarsService.changeContrastColorThreshold(threshold);
  }

  toggleAutoContrast() {
    this.isAutoContrast = !this.isAutoContrast;
    this.materialCssVarsService.setAutoContrastEnabled(this.isAutoContrast);
  }

}
