// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBm2R3HB0u4NzdkruZtIvqLQO8FiLhKGsg",
    authDomain: "fir-demo-ba6b1.firebaseapp.com",
    databaseURL: "https://fir-demo-ba6b1.firebaseio.com",
    projectId: "fir-demo-ba6b1",
    storageBucket: "fir-demo-ba6b1.appspot.com",
    messagingSenderId: "237065134629"
  }
};