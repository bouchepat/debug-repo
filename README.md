# debug-repo
Repo to debug ng-bootstrap Issue: #2118

Node version used: v8.9.3
App run on: Ubuntu 16.04

Very basic meteor app to reproduce ng-bootstrap #2118
No issue when run in development, to run: 
```
meteor npm install
meteor
```

The follwing issue occurs when the app is bundled up:
```
ERROR TypeError: i0.ɵnov(...).$any is not a function
    at Object.handleEvent (app.component.ngfactory.ts:64)
    at Object.handleEvent (typeahead-window.ngfactory.ts:95)
    at Object.handleEvent (typeahead-window.ngfactory.ts:95)
    at dispatchEvent (typeahead-window.ngfactory.ts:95)
    at typeahead-window.ngfactory.ts:95
    at HTMLInputElement.<anonymous> (typeahead-window.ngfactory.ts:95)
    at ZoneDelegate.invokeTask (typeahead-window.ngfactory.ts:95)
    at Object.onInvokeTask (typeahead-window.ngfactory.ts:95)
    at ZoneDelegate.invokeTask (typeahead-window.ngfactory.ts:95)
    at Zone.runTask (typeahead-window.ngfactory.ts:95)
```

To bundle up:
```
meteor build /path/to/build --architecture os.linux.x86_64
```
This create a tar file: debug-repo.tar.gz
Uncompress: 
```
tar -xvf debug-repo.tar.gz -C /path/to/deploy
```
Go to: /path/to/deploy/bundle/programs/server
```
npm install
```
Go back to /path/to/deploy/bundle and run the app
```
PORT=3000 ROOT_URL=http://localhost:3000 MONGO_URL=mongodb://localhost:27017/myappname node main.js
```

Try to enter anything in input with developer tool open and the issue will appear.

