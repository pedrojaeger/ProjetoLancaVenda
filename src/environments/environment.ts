// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    projectId: 'lanca-venda',
    appId: '1:30465614172:web:b8a573f0ad04164fcca199',
    storageBucket: 'lanca-venda.appspot.com',
    apiKey: 'AIzaSyCATGifdhoPb5D5uk_y22JuKJI6w6FITbA',
    authDomain: 'lanca-venda.firebaseapp.com',
    messagingSenderId: '30465614172',
    databaseURL: "https://lanca-venda-default-rtdb.firebaseio.com",
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
