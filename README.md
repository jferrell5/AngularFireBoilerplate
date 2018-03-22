# AngularFire/Firebase Boilerplate

This is a minimal AngularFire/Firebase boilerplate.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.


## Install

```bash
npm install firebase angularfire2 --save
```

## Getting Started

Create your Firebase Database at 'https://console.firebase.google.com'

Add a collection to the newly created database named "items".

Add a document to the newly created items with the fields "ID" and "name".

Add your Firebase configuration to environment/environment.ts

### Example

```ts
export const environment = {
  production: false,
  firebase: {
    apiKey: '01fb0f4ebc1145e5b63b3dd6684b8273',
    authDomain: 'fir-sometestdb-d672b.firebaseapp.com',
    databaseURL: 'https://fir-sometestdb-d672b.firebaseio.com',
    projectId: 'fir-sometestdb-d672b',
    storageBucket: '',
    messagingSenderId: '6593216554254'
  }
};
```
Run the app locally with ng-serve -o

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).