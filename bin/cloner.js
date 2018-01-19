const shell = require('shelljs')
const REGEX = /(?:git|ssh|https?|git@[-\w.]+):(\/\/)?(.*?)(\.git)(\/?|\#[-\d\w._]+?)$/

exports.Cloner = class {

    constructor() {
        if (!shell.which(`git`)) {
            shell.echo(`This tool requires git, please install and try again!`)
            shell.exit(1)
        }
    }


    _isGitUrl(url) {
        return regex.test(url)
    }


    clone(repo, projectName, remoteUrl) {
        shell.pushd(`.`)
        shell.rm(`-rf`, projectName)

        if (!this._isGitUrl(repo)) {
            shell.echo(`Seed repo URL invalid, aborting!`)
            shell.exit(1)
        }

        shell.exec(`git clone --depth=1 ${repo} ${projectName}`)
        shell.cd(projectName)
        shell.rm(`-rf`, `.git`)

        if (!!remoteUrl) {
            this.reinit(remoteUrl)
            return
        }

        shell.echo(`No new remote URL specified, finishing up here!`)
    }


    reinit(remoteUrl) {
        shell.echo(`Re-initialising git...`)
        shell.exec(`git init`)

        if (!this._isGitUrl(remoteUrl)) {
            shell.echo(`Remote URL appears to be invalid, you can add a valid remote later!`)
            shell.exit(1)
        }

        shell.echo(`Valid new remote URL detected: ${remoteUrl} - adding...`)
        shell.exec(`git remote add origin ${remoteUrl}`)

        shell.echo(`Done!`)
    }

    
    installDeps() {
        shell.echo(`About to try and install seed dependencies...`)
        shell.exec(`npm i`)
    }
}

