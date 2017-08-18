# Wayward Pines Zoo: Animal Database
#### Angular JS Exercise for Epicodus | 2017.08.18

By Max Scher

## Description
This application allows the staff at Wayward Pines Zoo keep track of all of their animals, cataloging, editing, and filtering all pertinent information for each relevant to the residents of the zoo.

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

## Setup/Installation
In Terminal, type:
  * `git clone https://github.com/maxobaxo/js-zoo-db`
  * `cd js-zoo-db`
  * `npm install`
  * `bower install`
  * `ng serve`

In Browser, type:
  * `Visit the app at http://localhost:4200`

## Technologies Used
  Git, HTML, CSS, JavaScript, Angular, Angular-CLI, Node & NPM, Bower, Bootstrap

## License information
  This web application is free to use under the MIT License.  
  &copy;
  Max Scher 2017
