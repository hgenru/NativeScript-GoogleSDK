NativeScript plugin for Google Maps SDK
================


With the NativeScript plugin for Google Maps SDK you can easily use the [Google Maps API](https://developers.google.com/maps/) in a cross-platform manner.

* [Supported Platforms](#supported-platforms "The mobile platforms you can target with this plugin")
* [Installation](#installation "How to configure and install the plugin")
* [License](#license)

Supported Platforms
===

You can target the following mobile platforms.

* Android 4.2 or a later stable official release
* [not yet available] iOS 7.0 or later stable official release

[Back to Top][1]

Installation
===

## Install the plugin using the NativeScript CLI

The plugin is available for installing as an npm package.

In the command prompt, at the root of the NativeScript project, run the following command.

```
tns plugin add nativescript-google-sdk
```

TODO - write how to install the GooglePlay services native SDKs.

```
tns library add android "path to the GooglePlayServices SDK"
```

 - modify the AndroidManifest.xml to include the google play lines in the application section
 - Change the API_KEY
 - copy the module from node_moules to tns_modules
 - modify the main-page.xml file - 

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

```
// support is coming for iOS
```

[Back to Top][1]

License
===

This software is licensed under the Apache 2.0 license, quoted <a href="LICENSE" target="_blank">here</a>.
