Work in Progress
======

PoC to help new projects quickly from a preferred Ionic 3.x template with common utilities and dependencies pre-specificied for ease.

```
Usage: cw [optional git:// seed URL]
```

If you don't specify a seed repo, the CLI will default to the one found [here](https://github.com/chrisweight/cjw-ionic-seed/)


The CLI will ask for a set of basic project information, clone the seed repo, then update the relevant files with the entered answers. Once that's done it will attempt to install any `npm` dependencies and after that, you're good to go!

Your seed repo can include an optional `cw.config.json` file (as [here](https://github.com/chrisweight/cjw-ionic-seed/blob/master/cw.config.json)), this is a simple mapping of key/value pairs of the base information you would like to update after cloning. [WiP - TODO: Expand this to allow for more types of information]. It also lists the files you would like to update with that information.

If it has a package.json file then any npm dependencies will be installed post clone.

TODO
------
- Better error-handling / retries
