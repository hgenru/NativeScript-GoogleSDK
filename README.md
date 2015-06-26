NativeScript plugin for Google Maps SDK
================

## The plugin is in experimental state!
## if you want to contribute please send pull request. The source code is available at [GitHub](https://github.com/valentinstoychev/NativeScript-GoogleSDK.git)

With the NativeScript plugin for Google Maps SDK you can easily use the native [Google Maps API](https://developers.google.com/maps/) in a cross-platform manner for Android and iOS.

* [Installation](#installation "How to configure and install the plugin")
* [License](#license)

Installation
===

## Install the plugin using the NativeScript CLI tooling

The plugin is available for installing as an npm package.

First you need to create a NativeScript project. If you are new to [NativeScript](http://www.nativescript.org/), please follow the [NativeScript getting started guide](http://docs.nativescript.org/getting-started) to create your app.

After you have the app created, in the command prompt, at the root of the NativeScript project, run the following command.

```
tns plugin add nativescript-google-sdk
```

Now you have the plugin installed. In this version the plugin is not adding the native Google SDKs, so you will need to add them manualy.

If you are new to GooglePlayServices, please read the [official guide about how to install the native GooglePlay services](https://developers.google.com/maps/documentation/android/start) on your machine.

After the GooglePlay services are installed, for Android please run the followng command: 

```
tns library add android "path to the GooglePlayServices SDK"
```

This will add the native libraries in the NativeScript project and will make the native API available for consumption in JavaScript.

The next step is to modify the AndroidManifest.xml file. It is located in your project folder in *platforms/android/* folder. Please merge the content of the two ```<application>``` sections into one section only. This is all you need to do in the AndroidManigest.xml file.

The next step is to set the GooglePlay API_KEY. It is specific for each app and each user, so you need to get it from the google service. Here is a [tutorial how to obtain that key](https://developers.google.com/maps/documentation/android/signup). 

Set the API_KEY in the AndroidManifest.xml file for the ```<meta-data android:name="com.google.android.geo.API_KEY"``` entry.

The last step is to copy the module from the ```app/node_modules``` to ```app/tns_modules``` folder.
 
You are now done and you can start using the plugin from your application!
 
Add the following declaration in the main-page.xml file:

```
 <Page 
	xmlns="http://www.nativescript.org/tns.xsd"
	xmlns:googleMapsPlugin="tns_modules/nativescript-google-sdk"
	>
  <GridLayout>
    <googleMapsPlugin:MapView/>
  </GridLayout>
</Page>
```

and then execute

```
tns run android 
```

If you have any problems, questions or suggestions you are more than welcome to [log an issue in GitHub](https://github.com/valentinstoychev/NativeScript-GoogleSDK/issues).

```
// support is coming for iOS
```

[Back to Top][1]

License
===

This software is licensed under the Apache 2.0 license, quoted <a href="LICENSE" target="_blank">here</a>.
