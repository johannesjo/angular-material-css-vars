import { Component, TrackByFunction } from "@angular/core";
import {
  ThemePalette,
  MatOptionModule,
  MatNativeDateModule,
} from "@angular/material/core";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { MaterialCssVarsService } from "../../projects/material-css-vars/src/lib/material-css-vars.service";
import {
  HueValue,
  MatCssHueColorContrastMapItem,
} from "../../projects/material-css-vars/src/lib/model";
import {
  ProgressSpinnerMode,
  MatProgressSpinnerModule,
} from "@angular/material/progress-spinner";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatMenuModule } from "@angular/material/menu";
import { MatChipsModule } from "@angular/material/chips";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSliderModule } from "@angular/material/slider";
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { NgFor, NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ColorPickerDirective } from "ngx-color-picker";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

interface Hue {
  value: string;
  viewValue: string;
}

interface SpinnerColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    ColorPickerDirective,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    NgFor,
    MatOptionModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    NgIf,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatChipsModule,
    MatMenuModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatNativeDateModule,
  ],
})
export class AppComponent {
  isDarkTheme = false;
  threshold?: HueValue;
  isAlternativeColorAlgorithm = false;

  palettePrimary?: MatCssHueColorContrastMapItem[];

  readonly hues: Hue[] = [
    { value: "50", viewValue: "50" },
    { value: "100", viewValue: "100" },
    { value: "200", viewValue: "200" },
    { value: "300", viewValue: "300" },
    { value: "400", viewValue: "400" },
    { value: "500", viewValue: "500" },
    { value: "600", viewValue: "600" },
    { value: "700", viewValue: "700" },
    { value: "800", viewValue: "800" },
    { value: "900", viewValue: "900" },
    { value: "A100", viewValue: "A100" },
    { value: "A200", viewValue: "A200" },
    { value: "A400", viewValue: "A400" },
    { value: "A700", viewValue: "A700" },
  ];

  spinnerMode: ProgressSpinnerMode = "indeterminate";
  spinnerValue = 25;
  spinnerColor: ThemePalette = "primary";
  readonly availableSpinnerColors: SpinnerColor[] = [
    { name: "none", color: undefined },
    { name: "Primary", color: "primary" },
    { name: "Accent", color: "accent" },
    { name: "Warn", color: "warn" },
  ];

  progress = 0;

  readonly task: Task = {
    name: "Indeterminate",
    completed: false,
    color: "primary",
    subtasks: [
      { name: "Primary", completed: false, color: "primary" },
      { name: "Accent", completed: false, color: "accent" },
      { name: "Warn", completed: false, color: "warn" },
    ],
  };

  allComplete = false;
  someComplete = false;

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

  showSnackbar(message: string, action: string) {
    // this._snackbar.open('YUM SNACKS', 'CHEW');
    this._snackbar.open(message, action);
  }

  onPrimaryChange(hex: string) {
    this.materialCssVarsService.setPrimaryColor(hex);
    this.palettePrimary =
      this.materialCssVarsService.getPaletteWithContrastForColor(hex);
  }

  onAccentChange(hex: string) {
    this.materialCssVarsService.setAccentColor(hex);
  }

  onWarnChange(hex: string) {
    this.materialCssVarsService.setWarnColor(hex);
  }

  onChangeThresholdPrimary(threshold: HueValue) {
    this.threshold = threshold;
    this.materialCssVarsService.setContrastColorThresholdPrimary(threshold);
  }

  onChangeThresholdAccent(threshold: HueValue) {
    this.threshold = threshold;
    this.materialCssVarsService.setContrastColorThresholdAccent(threshold);
  }

  onChangeThresholdWarn(threshold: HueValue) {
    this.threshold = threshold;
    this.materialCssVarsService.setContrastColorThresholdWarn(threshold);
  }

  toggleAutoContrast() {
    this.materialCssVarsService.setAutoContrastEnabled(
      !this.materialCssVarsService.isAutoContrast,
    );
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.materialCssVarsService.setDarkTheme(this.isDarkTheme);
  }

  toggleTraditionalColor() {
    this.isAlternativeColorAlgorithm = !this.isAlternativeColorAlgorithm;
    this.materialCssVarsService.setAlternativeColorAlgorithm(
      this.isAlternativeColorAlgorithm,
    );
  }

  get colorAlgorithm(): string {
    return this.isAlternativeColorAlgorithm
      ? "Alternative"
      : "Constantin (default)";
  }

  updateCompletionState() {
    this.allComplete = this.task.subtasks?.every((t) => t.completed) ?? false;
    this.someComplete =
      (!this.allComplete && this.task.subtasks?.some((t) => t.completed)) ??
      false;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach((t) => (t.completed = completed));
  }

  trackByHue: TrackByFunction<Hue> = (index, hue) => hue.value;
  trackByTask: TrackByFunction<Task> = (index, task) => task.name;
  trackBySpinnerColor: TrackByFunction<SpinnerColor> = (index, color) =>
    color.name;
}
