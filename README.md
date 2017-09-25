# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Covered lessons

### Setup to develop locally
1. The Tour of Heroes app uses the double curly braces of interpolation (a type of one-way data binding) to display the app title and properties of a Hero object.
2. You wrote a multi-line template using ES2015's template literals to make the template readable.
3. You added a two-way data binding to the <input> element using the built-in ngModel directive. This binding both displays the hero's name and allows users to change it.
4. The ngModel directive propagates changes to every other binding of the hero.name.


### Master/Detail
1. The Tour of Heroes app displays a list of selectable heroes.
2. You added the ability to select a hero and show the hero's details.
3. You learned how to use the built-in directives ngIf and ngFor in a component's template.

### Multiple Components
1. You created a reusable component.
2. You learned how to make a component accept input.
3. You learned to declare the required application directives in an NgModule.
4. You listed the directives in the @NgModule decorator's declarations array.
5. You learned to bind a parent component to a child component.


###  Services
1. You created a service class that can be shared by many components.
2. You used the ngOnInit lifecycle hook to get the hero data when the AppComponent activates.
3. You defined the HeroService as a provider for the AppComponent.
4. You created mock hero data and imported them into the service.
5. You designed the service to return a Promise and the component to get the data from the Promise.

###  Routing
