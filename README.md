# ngIfResponsive

> A simple project that provides helpers to render or remove elements from the DOM based on screen size. Its like `ngIf`, just responsive.



<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [NgIfResponsive - WOIP](#ngifresponsive---woip)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Import](#import)
    - [Usage in HTML](#usage-in-html)
      - [Pixel breakpoint](#pixel-breakpoint)
      - [Configuration usage](#configuration-usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

To install this project run the following command in a terminal of your choice. 

```bash
npm install ngIfResponsive
```
## Usage

The project currently provides two directives. A `ngIfResponsiveRender` and a `ngIfResponsiveRemove` directive. As the name indicates the remove directive is used to remove some elements on certain screen sizes and the render directive is used to render elements on certain screen sizes.

### Import

Both directives are exported as standalone components and can therefore be added to the `imports` array in your module or standalone component.



```typescript
imports: [NgIfResponsiveRemoveDirective,NgIfResponsiveRenderDirective]
```



### Usage in HTML

Both directives can be applied as attribute directives on any given DOM element. Each directive accepts the breakpoint as input. When using the directive there are two options, you can either pass in the width of the screen size in Pixel as a number or you can use a custom key as breakpoint identifier (this has to be configured, via Injection token, see below)



#### Pixel breakpoint

To use a picel as breakpoint you can use the directive in the following way:

```html
<h3 *ngIfResponsiveRemove="640">Hide on screens bigger than sm</h3>
```



#### Configuration usage

If you want to use customized breakpoint identifiers you can define them via the ```RESPONSIVE_NG_IF_CONFIG`` injection token. A example configuration inside your `AppModule` or `AppComponent` could look like this.

```typescript
providers: [
    {
      provide: RESPONSIVE_NG_IF_CONFIG,
      useValue: {
        sm: 640,
        md: 769,
        lg: 1024,
        xl: 1080
      }
    }
],
```



Based on the configuration you can then go ahead and pass one of the keys (`sm`, `md`, `lg`, `xl`) to the directive.

```html
<h3 *ngIfResponsiveRemove="'sm'">Hide on screens bigger than sm</h3>
```

