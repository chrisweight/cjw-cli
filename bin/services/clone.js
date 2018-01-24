const shell = require('shelljs')
const REGEX = /(?:git|ssh|https?|git@[-\w.]+):(\/\/)?(.*?)(\.git)(\/?|\#[-\d\w._]+?)$/

module.exports = class {
    
  constructor() {
    if (!shell.which(`git`)) {
      shell.echo(`This tool requires git, please install and try again!`)
      shell.exit(1)
    }
  }


  isGitUrl(url) {
    return REGEX.test(url)
  }


  clone(repo, directoryName, remoteUrl) {
    shell.pushd(`.`)
    shell.rm(`-rf`, directoryName)

    if (!this.isGitUrl(repo)) {
      shell.echo(`Seed repo URL invalid, aborting!`)
      shell.exit(1)
    }

    shell.exec(`git clone --depth=1 ${repo} ${directoryName}`)
    shell.cd(directoryName)
    shell.rm(`-rf`, `.git`)

    if (remoteUrl === undefined || !this.isGitUrl(remoteUrl)) {
      shell.echo(`Remote URL appears to be invalid, you can add a valid remote later!`)
      return
    }
    
    shell.echo(`Re-initialising git...`)
    shell.exec(`git init`)
   
    shell.echo(`Valid new remote URL detected: ${remoteUrl} - adding...`)
    shell.exec(`git remote add origin ${remoteUrl}`)

    shell.echo(`Done!`)
  }


  installNPMDependencies() {
    shell.echo(`About to try and install seed dependencies...`)
    shell.exec(`npm i`)
  }
}

