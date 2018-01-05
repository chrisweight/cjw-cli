##Work in Progress##

PoC to help new projects quickly from a preferred Ionic 3.x template with common utilities and dependencies pre-specificied for ease.

```
Usage: cw -p [string] -r [string]

-p: project / directory name            [required]
-r: remote repo URL to add as origin    [optional]

Example: cw -p new-project-name -r git@github.com:chrisweight/new-project-repo.git
```

Currently, the source code is pointing at a test seed repo also in this Github account, but you can point that at _any_ repo that you have sufficient permissions to clone.
If it has a package.json file then any npm dependencies will be installed post clone.

