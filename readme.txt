# FirstSteps

Zur puren Freude habe ich das Projektle von npm über gulp bis postcss geführt. Kein Wunder hat dies so lange gedauert wenn ich noch immer an den CSS Standards von 2007 klebe.. item.

## Installation
Grundsystem installieren via NPM (ACHTUNG: Verzeichnis sollte nicht in dropbox ordner sein... der "node_modules" Ordner enthält nach der installation zig Dateien)
```
cd gulping
npm install
npm install --global gulp-cli
```

## Gebrauch
Die assets sind, sofern diese via Gulp verarbeitet werden im Ordner "gulping/src/" zu finden. Alles andere ist gemäss chasotheorie irgendwo zerstreut. Optimalerweise sind assets im ordner "inc/assets/" zu finden. Gulp kopiert z.B. das main.css File nach inc/assets/css/main.css

Damit das deployment mit gulp/postcss läuft einfach folgendes im Terminal eingeben:
```
gulp watch
``` 
Danach werden die Dateien im Ordner gulping/src/css/ bei einer Veränderung neu verarbeitet und landen automatisch in inc/assets/css/main.css. 

Mehr gibt es bisweilen noch nicht.
