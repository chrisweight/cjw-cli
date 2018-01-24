WiP: @cjw-cli
======

A PoC to help bootstrap new projects quickly from a preferred Ionic 3.x template with common utilities and dependencies pre-specificied for ease.

```
Usage: cw [--seed=git@github.com:user/seed.git] [--name=project name] [--description=meaningful project description] [--identifier=project.domain.com] [--remote=git@github.com:user/projectRepo.git]
```

If you don't specify a seed repo, the CLI will default to the one found [here](https://github.com/chrisweight/cjw-ionic-seed/)

Similarly, if you don't specify the optional arguments inline, the CLI will ask for basic project information.

Once done and validated, it will clone the seed repo, then update the relevant files with the entered answers. Once that's done it will attempt to install any `npm` dependencies and after that, you're good to go!

Your seed repo can include an optional `.cwrc` file (as [here](https://github.com/chrisweight/cjw-ionic-seed/blob/master/.cwrc)), this is a simple mapping of key/value pairs of the base information you would like to update after cloning. It also lists the files you would like to update with that information.

If it has a package.json file then any npm dependencies will be installed post-clone and setup.

TODO
------
- Better error-handling / retries
- Expand `.cwrc` to allow for more types of information
- Add extra validators for input arguments, i.e. app identifier
