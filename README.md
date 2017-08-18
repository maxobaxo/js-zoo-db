# Angular2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Planning

1. Configuration/Dependencies
  * You will need the following things properly installed on your computer.
    * [Git](https://git-scm.com/)
    * [Node.js](https://nodejs.org/) (with NPM)
    * [Angular.js](https://angular.io/)
    * [Typescript](https://www.typescriptlang.org/)
    * [Bower](https://bower.io/)
    * [Angular CLI](https://github.com/angular/angular-cli)

2. Specifications
  * It can list all animals currently admitted at the zoo.
  * It can filter the list by age (old or young).
  * It can allow users to add a newly-admitted animal to the app, along with the new animal's species, name, age, diet, zoo location, number of needed caretakers, sex, one like and one dislike.
  * It can allow users to edit an animal's name, age, or caretakers.

3. Architectural/Component Outline
  * Main Page
    * Add-Animal Component
      * Conditional statement displaying an 'Add' button or Animal-Submission Form
    * List-Animal Component
      * Drop-Down Menu to Filter By Age: All, Young, or Old.
      * Loop/List through Each Animal, containing Edit-Animal component, which will display 'Edit' button next to each animal.

4. UX/UI
  * Bootstrap Styling

5. Polish
  * Look for opportunities to refactor/DRY-up code
  * Delete any unused templates/components
  * Flesh-out rest of README

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
