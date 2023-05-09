import {Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {ThemePalette} from '@angular/material/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MaterialCssVarsModule} from '../lib/material-css-vars.module';
import {By} from '@angular/platform-browser';

@Component({
  template: `
    <button mat-raised-button [color]="color">Button text</button>`,
  standalone: true,
  imports: [MatButtonModule],
})
class ButtonComponent {
  @Input() color: ThemePalette;
}

describe('integration', () => {
  describe('custom colors', () => {
    let button: ButtonComponent;
    let fixture: ComponentFixture<ButtonComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          MaterialCssVarsModule.forRoot({
            primary: '#00ff00',
            accent: '#0000ff',
            warn: '#ff0000',
          }),
        ],
      });
      fixture = TestBed.createComponent(ButtonComponent);
      button = fixture.componentInstance;
    });

    it('should render a button in the given primary color', () => {
      button.color = 'primary';
      fixture.detectChanges();
      const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;

      expect(getComputedStyle(buttonElement).backgroundColor).toEqual('rgb(0, 255, 0)');
    });

    it('should choose the right contrast color for the primary color', () => {
      button.color = 'primary';
      fixture.detectChanges();
      const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;

      expect(getComputedStyle(buttonElement).color).toEqual('rgba(0, 0, 0, 0.87)');
    });

    it('should render a button in the given accent color', () => {
      button.color = 'accent';
      fixture.detectChanges();
      const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;

      expect(getComputedStyle(buttonElement).backgroundColor).toEqual('rgb(0, 0, 255)');
    });

    it('should choose the right contrast color for the accent color', () => {
      button.color = 'accent';
      fixture.detectChanges();
      const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;

      expect(getComputedStyle(buttonElement).color).toEqual('rgb(255, 255, 255)');
    });

    it('should render a button in the given warn color', () => {
      button.color = 'warn';
      fixture.detectChanges();
      const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement;

      expect(window.getComputedStyle(buttonElement).backgroundColor).toEqual('rgb(255, 0, 0)');
    });

    it('should choose the right contrast color for the warn color', () => {
      button.color = 'warn';
      fixture.detectChanges();
      const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;

      expect(getComputedStyle(buttonElement).color).toEqual('rgb(255, 255, 255)');
    });
  });

  describe('default colors', () => {
    let button: ButtonComponent;
    let fixture: ComponentFixture<ButtonComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          MaterialCssVarsModule.forRoot({}),
        ],
      });
      fixture = TestBed.createComponent(ButtonComponent);
      button = fixture.componentInstance;
    });

    it('should render a button in the default primary color', () => {
      button.color = 'primary';
      fixture.detectChanges();
      const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;

      expect(getComputedStyle(buttonElement).backgroundColor).toEqual('rgb(3, 169, 244)');
    });

    it('should choose the right contrast color for the primary color', () => {
      button.color = 'primary';
      fixture.detectChanges();
      const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;

      expect(getComputedStyle(buttonElement).color).toEqual('rgb(255, 255, 255)');
    });

    it('should render a button in the default accent color', () => {
      button.color = 'accent';
      fixture.detectChanges();
      const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;

      expect(getComputedStyle(buttonElement).backgroundColor).toEqual('rgb(233, 30, 99)');
    });

    it('should choose the right contrast color for the accent color', () => {
      button.color = 'accent';
      fixture.detectChanges();
      const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;

      expect(getComputedStyle(buttonElement).color).toEqual('rgb(255, 255, 255)');
    });

    it('should render a button in the default warn color', () => {
      button.color = 'warn';
      fixture.detectChanges();
      const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement;

      expect(window.getComputedStyle(buttonElement).backgroundColor).toEqual('rgb(244, 67, 54)');
    });

    it('should choose the right contrast color for the warn color', () => {
      button.color = 'warn';
      fixture.detectChanges();
      const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;

      expect(getComputedStyle(buttonElement).color).toEqual('rgb(255, 255, 255)');
    });
  });

  afterEach(() => {
    // clear CSS variables
    document.documentElement.removeAttribute('style');
  });
});
