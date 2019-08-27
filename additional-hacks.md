## Custom elevation shadow color
In case you also want to add a color to your shadows, you can include the following mixin directly before you execute `@include initMaterialCssVars();`. Thanks goes to @picc09 for finding this out.

```scss
$mat-css-palette-foreground: map-merge(
  // if you don't want to enter ALL the properties
  $mat-css-palette-foreground,
  (
      elevation: var(--your-elevation-color-variable)
  // ...
  )
);

@mixin mat-elevation($zValue, $color: $mat-elevation-color, $opacity: $mat-elevation-opacity) {
  @if type-of($zValue) != number or not unitless($zValue) {
    @error '$zValue must be a unitless number';
  }
  @if $zValue < 0 or $zValue > 24 {
    @error '$zValue must be between 0 and 24';
  }

  $color-umbra: $color;
  $color-penumbra: $color;
  $color-ambient: $color;
  @if type-of($color) != color {
    $color-umbra: rgba($color, $opacity * 0.2);
    $color-penumbra: rgba($color, $opacity * 0.14);
    $color-ambient: rgba($color, $opacity * 0.12);
  }

  box-shadow: #{map-get(_get-umbra-map($color-umbra, $opacity), $zValue)},
  #{map-get(_get-penumbra-map($color-penumbra, $opacity), $zValue)},
  #{map-get(_get-ambient-map($color-ambient, $opacity), $zValue)};
}

// finally initialize
@include initMaterialCssVars();
```

In this way you can change `elevation: black` into variables file.
