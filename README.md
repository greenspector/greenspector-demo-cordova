Greenspector Demo
=================

Ce projet est une application de démonstration pour les besoins de Greenspector.
Il s'agit d'une application mobile Android [Cordova](http://cordova.apache.org/)
qui utilise [Ionic Framework](http://ionicframework.com) et [AngularJS](https://angularjs.org/).


Installation:
----

```
npm install -g ionic
npm install -g cordova
npm install
bower install
```

Démarrer l'application sur un serveur web local (auto-reload lors de l'enregistrement d'une modification sur le code):

```
ionic serve
```

Build de l'application mobile:
----

```
ionic build android
```

Note: La commande...

```
ionic run android
```
...permet en théorie de build, installer et démarrer l'application sur un émulateur ou un téléphone Android. Petit bémol, le CLI ionic semble omettre des ressources lors de l'assemblage dans le socle Cordova. En inspectant avec les Chrome Dev Tools, section Remote devices, on peut constater le message suivant:

```
Failed to load resource file:///android_asset/www/cordova_plugins.js
```

Solution:

```
cordova plugin add cordova-plugin-whitelist

cordova run android
```

and voilà !
