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
  primary = '#3f51b5';
  accent = '#e91e63';
  warn = '#f44336';

  isDarkTheme = false;
  isAutoContrast = true;
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

  lastDialogResult: string;
  spinnerMode = 'indeterminate';
  spinnerValue: number;
  spinnerColor = 'primary';
  availableSpinnerColors = [
    {name: 'none', color: ''},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'}
  ];

  progress = 0;

  constructor(
    private _dialog: MatDialog,
    private _snackbar: MatSnackBar,
    public materialCssVarsService: MaterialCssVarsService,
  ) {
    this.toggleTheme();
    // this.onPrimaryChange(this.primary);
    // this.onAccentChange(this.accent);


    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }


  showSnackbar() {
    this._snackbar.open('YUM SNACKS', 'CHEW');
  }

  onPrimaryChange(hex: string) {
    this.primary = hex;
    this.materialCssVarsService.changePrimaryColor(hex);
  }

  onAccentChange(hex: string) {
    this.accent = hex;
    this.materialCssVarsService.changeAccentColor(hex);
  }

  onWarnChange(hex: string) {
    this.warn = hex;
    this.materialCssVarsService.changeWarnColor(hex);
  }

  onChangeThreshold(threshold: HueValue) {
    this.threshold = threshold;
    this.materialCssVarsService.changeContrastColorThreshold(threshold);
  }

  toggleAutoContrast() {
    this.isAutoContrast = !this.isAutoContrast;
    this.materialCssVarsService.setAutoContrastEnabled(this.isAutoContrast);
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.materialCssVarsService.setDarkTheme(this.isDarkTheme);
  }
}
