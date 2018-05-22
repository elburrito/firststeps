# FirstSteps

## Installation
Grundsystem installieren via NPM ( https://nodejs.org )
ACHTUNG: Verzeichnis sollte nicht in dropbox ordner sein... der "node_modules" Ordner enthält nach der installation zig Dateien
Danach diesen Code in der Kommandozeile ausführen um die benötigten "Tools" zu laden
```
cd config
npm install
npm install --global gulp-cli
```

## Gebrauch
Es gibt die 2 Hauptordner "src" und "dist".
Dateien die via gulp Zwischenverarbeitet werden sollen (CSS, HTML und Javascript Dateien) sind unter "src" abzulegen. Diese Dateien werden nach der Verarbeitung mit gulp in den "dist" Ordner kopiert.
Gulp kopiert z.B. alle CSS Dateien unter src/css/ nach dist/assets/css/main.css

Dateien die nicht via gulp verarbeitet werden können auch direkt im "dist" Ordner abgelegt werden. (bsp. Bootstrap Javascript und CSS Dateien, statische Bilder und anderes).

Damit das deployment (kopieren von "src" nach "dist") mit gulp/postcss läuft einfach folgendes im Terminal eingeben:
```
gulp watch
```
Danach werden die Dateien im Ordner src/css/ bei einer Veränderung neu verarbeitet und landen automatisch in dist/assets/css/main.css.

## Weiteres
Weitere Informationen findet man in der Datei config/gulpfile.js
