##Work in Progress##

PoC to help new projects quickly from a preferred Ionic 3.x template with common utilities and dependencies pre-specificied for ease.

```
Usage: cw 
```

The CLI will ask for a set of basic project information, clone the seed repo, then update the relevant files with the entered answers. Once that's done it will attempt to install any `npm` dependencies and after that, you're good to go!

Currently, the source code is pointing at a test seed repo also in this Github account, but you can point that at _any_ repo that you have sufficient permissions to clone.
If it has a package.json file then any npm dependencies will be installed post clone.

