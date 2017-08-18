// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBCQszhiAFqvxR5aABBwr3vU2PUuGPfIy4",
    authDomain: "js-zoo-db.firebaseapp.com",
    databaseURL: "https://js-zoo-db.firebaseio.com",
    projectId: "js-zoo-db",
    storageBucket: "",
    messagingSenderId: "551430180545"
  }
};
