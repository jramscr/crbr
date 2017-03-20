# Sample Ionic App

### Installation
NPM and Bower need to be installed.

Run bower and npm to get all dependencies needed.
```sh
$ npm install
$ bower install
$ ionic config build
``` 

###Development
To run the app locally (localhost), use the following command: 
```sh
ionic serve
```

###Runing on Android device
In order to run the application on an Android device:

Add Android platform:
```sh
$ ionic platform add android
```

Connect the device to the computer, allow USB debugging and then execute:
```sh
$ ionic run android
```

###Setting up tests
In order to unit tests, please do the following:
```sh
karma start
```

###Fix problems with icon and splash
To fix the problems with icon and splash(android), please do the following:
```sh
 $ ionic platform rm android
 $ ionic platform add android@latest
 $ ionic resources
 $ ionic run android
```

## Styleguide

Refer to AngularJS John Papa Styleguide: https://github.com/johnpapa/angular-styleguide
