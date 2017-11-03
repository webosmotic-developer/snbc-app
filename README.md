## Getting Started

To get you started you can simply clone the `snbc-app` repository.

### Prerequisites

Before run SNBC demo project, you will need the following:

* [Node.js](http://nodejs.org/) and [npm](http://npmjs.org/)
* [Ionic](https://ionicframework.com/docs/#)
* [Cordova](https://cordova.apache.org/)

You can check if you have Node and npm installed by typing:
```sh
$ node --version && npm --version
```

## Installing Node.js and npm

If you're using OS X or Windows, the best way to install Node.js is to use one of the installers from [nodejs.org](https://nodejs.org/en/). If you're using Linux, you can use the installer, or you can check [NodeSource's binary distributions](https://github.com/nodesource/distributions) to see whether or not there's a more recent version that works with your system.

### Updating npm

Node comes with npm installed so you should have a version of npm. However, npm gets updated more frequently than Node does, so you'll want to make sure it's the latest version.

```sh
$ sudo npm install npm -g
```

### Uninstalling local npm packages
You can remove a package from your node_modules directory using npm uninstall <package>

```sh
$ npm uninstall lodash
```


To remove it from the dependencies in package.json, you will need to use the save flag

```sh
$ npm uninstall --save lodash
```

## Installing Ionic and cordova

You can install both Ionic and Cordova by single line command 

```bash
$ sudo npm install -g ionic cordova
```

## Clone and run Project 
Clone the `snbc-app` repository using git:

```
git clone https://github.com/webosmotic-developer/snbc-app.git
cd snbc-app
```

### Install project dependency
 
Before run SNBC demo project need to install all dependency

```
$ npm install
```

Then, to run it:

```bash
$ ionic cordova platform add android
$ ionic cordova run android
```

After this command project will run in android simulator. 
I have used [Android studio](https://developer.android.com/studio/index.html) for android simulator and debugging

# Cordova SNBC Plugin for Ionic

## Clone SNBC plugin 
Clone the `cordova-plugin-snbc` repository using git:

```
git clone https://github.com/webosmotic-developer/cordova-plugin-snbc.git
```

this command creates a folder named "cordova-plugin-snbc"

Now, go to in snbc-app
 
```
cd snbc-app
```

and add *cordova-plugin-snbc* plugin in *snbc-app* by following command

```
cordova plugin add ../cordova-plugin-snbc/snbc
```

#### Note:
**Make sure that *snbc-app* and *cordova-plugin-snbc* both are in same folder 
because plugin path is use in above add command.**

you can remove *cordova-plugin-snbc* plugin from 'snbc-app' by following command 

```
cordova plugin rm cordova-plugin-snbc
```

### Now time to access *cordova-plugin-snbc* plugin *snbc-app*

you can access plugni as following 

```
declare var cordova: any;
...
fnOpenSlot() {
    cordova.plugins.snbc.openSlot(
      this.iSlotID, this.iCabinetID,
      (status) => {
        alert('SUCCESS : <' + this.iCabinetID + ',' + this.iSlotID + '>' + status);
      },
      (err) => {
        alert('ERROR : <' + this.iCabinetID + ',' + this.iSlotID + '>' + err);
      }
    );
  }
```
