import { Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { ThemePalette } from "@angular/material/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MaterialCssVarsModule } from "../lib/material-css-vars.module";
import { By } from "@angular/platform-browser";

@Component({
  template: ` <button mat-raised-button [color]="color">Button text</button>`,
  standalone: true,
  imports: [MatButtonModule],
})
class ButtonComponent {
  @Input() color: ThemePalette;
}

function getButtonComputedStyle(
  fixture: ComponentFixture<ButtonComponent>,
): CSSStyleDeclaration {
  const buttonElement = fixture.debugElement.query(
    By.css("button"),
  ).nativeElement;
  return getComputedStyle(buttonElement);
}

describe("integration", () => {
  ["isLightTheme", "isDarkTheme", "unthemed"].forEach((theme) => {
    const isDarkTheme =
      theme === "unthemed" ? undefined : theme === "isDarkTheme";

    describe(theme, () => {
      describe("custom colors", () => {
        let button: ButtonComponent;
        let fixture: ComponentFixture<ButtonComponent>;

        beforeEach(() => {
          TestBed.configureTestingModule({
            imports: [
              MaterialCssVarsModule.forRoot({
                primary: "#00ff00",
                accent: "#0000ff",
                warn: "#ff0000",
                isDarkTheme,
              }),
            ],
          });
          fixture = TestBed.createComponent(ButtonComponent);
          button = fixture.componentInstance;
        });

        it("should render a button in the given primary color", () => {
          button.color = "primary";
          fixture.detectChanges();

          expect(getButtonComputedStyle(fixture).backgroundColor).toEqual(
            "rgb(0, 255, 0)",
          );
        });

        it("should choose the right contrast color for the primary color", () => {
          button.color = "primary";
          fixture.detectChanges();

          expect(getButtonComputedStyle(fixture).color).toEqual(
            "rgba(0, 0, 0, 0.87)",
          );
        });

        it("should render a button in the given accent color", () => {
          button.color = "accent";
          fixture.detectChanges();

          expect(getButtonComputedStyle(fixture).backgroundColor).toEqual(
            "rgb(0, 0, 255)",
          );
        });

        it("should choose the right contrast color for the accent color", () => {
          button.color = "accent";
          fixture.detectChanges();

          expect(getButtonComputedStyle(fixture).color).toEqual(
            "rgb(255, 255, 255)",
          );
        });

        it("should render a button in the given warn color", () => {
          button.color = "warn";
          fixture.detectChanges();

          expect(getButtonComputedStyle(fixture).backgroundColor).toEqual(
            "rgb(255, 0, 0)",
          );
        });

        it("should choose the right contrast color for the warn color", () => {
          button.color = "warn";
          fixture.detectChanges();

          expect(getButtonComputedStyle(fixture).color).toEqual(
            "rgb(255, 255, 255)",
          );
        });
      });

      describe("default colors", () => {
        let button: ButtonComponent;
        let fixture: ComponentFixture<ButtonComponent>;

        beforeEach(() => {
          TestBed.configureTestingModule({
            imports: [MaterialCssVarsModule.forRoot({ isDarkTheme })],
          });
          fixture = TestBed.createComponent(ButtonComponent);
          button = fixture.componentInstance;
        });

        it("should render a button in the default primary color", () => {
          button.color = "primary";
          fixture.detectChanges();

          expect(getButtonComputedStyle(fixture).backgroundColor).toEqual(
            "rgb(3, 169, 244)",
          );
        });

        it("should choose the right contrast color for the primary color", () => {
          button.color = "primary";
          fixture.detectChanges();

          expect(getButtonComputedStyle(fixture).color).toEqual(
            "rgb(255, 255, 255)",
          );
        });

        it("should render a button in the default accent color", () => {
          button.color = "accent";
          fixture.detectChanges();

          expect(getButtonComputedStyle(fixture).backgroundColor).toEqual(
            "rgb(233, 30, 99)",
          );
        });

        it("should choose the right contrast color for the accent color", () => {
          button.color = "accent";
          fixture.detectChanges();

          expect(getButtonComputedStyle(fixture).color).toEqual(
            "rgb(255, 255, 255)",
          );
        });

        it("should render a button in the default warn color", () => {
          button.color = "warn";
          fixture.detectChanges();

          expect(getButtonComputedStyle(fixture).backgroundColor).toEqual(
            "rgb(244, 67, 54)",
          );
        });

        it("should choose the right contrast color for the warn color", () => {
          button.color = "warn";
          fixture.detectChanges();

          expect(getButtonComputedStyle(fixture).color).toEqual(
            "rgb(255, 255, 255)",
          );
        });
      });
    });
  });

  afterEach(() => {
    // clear CSS variables
    document.documentElement.removeAttribute("style");
  });
});
