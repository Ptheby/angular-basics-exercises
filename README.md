# AngularBasicsExercises

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



Exercise 1- Intro and Setup
In this exercise I just created a h1 in the app.component.html to display a message and then ng served it

Exercise 2- Profile Component
I created a new component with the CLI with ng g c Profile, so it sets up all the component files for me. 
In the profile.component.ts file i created a couple variables under the 
export class Profile Component {
name:string='Paul Theby';
age:number= 37; 
}
Then i added a couple elements in the profile.component.html files and used string interpolation to display the name and age like this:
<div>
  <h2>Profile</h2>
  <p>Name:{{name}}</p>
  <p>Age:{{age}}</p>
</div>

Then i added   <app-profile></app-profile> 
to the app.component.html page so that it can be included in the dom?

Exercise 3- Counter Component and Data Binding

i created a counter in the ts file under the export class

numberCounter:number=0;

increment() {
this.numberCounter +=1
}

decrement() {
this.numberCounter -=1
}

so in this case i am creating a number variable named numberCounter and setting that to zero. I then create two methods within this export class one to increment the value numberCounter
by 1 and then one to decrease it by one. 
Then in the HTML:
I use property binding on innerText propert of a span tag and have it equal my variable numberCounter. 
I then create two buttons, both with event binding on the (click). For the button i label decrease, i set the event bound click to the decrement method in my ts file that i made and 
i do the same thing for the button labeled increase with the increment method. 

I then incorporate the counter component into the main app.component.html with <app-counter></app-counter>



