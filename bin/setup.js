const fs = require('fs')

const keys = {
    name: '${projectName}',
    description: '${projectDescription}',
    identifier: '${appIdentifier}',
    repo: '{$projectRepoUrl}'
}

const fileList = [
    'config.xml',
    'ionic.config.json',
    'package.json',
    './src/index.html'
]

exports.Setup = class {

    constructor() {

    }

    replaceValuesInFile(file, searchValueMap, replaceValueMap) {
        console.log('Setup.replaceValuesInFile: ', file)

        return new Promise((resolve, reject) => {

            fs.readFile(file, 'utf8', (err, data) => {
                if (!!err) {
                    return reject(err)
                }

                // 1. Break the values out to two arrays
                let _sv = Object.values(searchValueMap)
                let _rv = Object.values(replaceValueMap)

                // 2. Combine to a single key-value map, 
                // we also keep a separate escaped regex array so we can still lookup with the unescaped value
                let _mapped = {}
                let _escaped = []

                _sv.forEach((value, index) => {
                    _mapped[value] = _rv[index]
                    _escaped.push(RegExp.escape(value))
                })

                // 3. Create the regex from the escaped characters
                const re = new RegExp(_escaped.join("|"), 'g')

                let result = data.replace(re, matched => {
                    const _replacement = _mapped[matched]
                    console.log('Matched: ', matched, _replacement)
                    return _replacement
                })

                // 4. No changes, so just return back here
                if (result === data) {
                    return resolve(result)
                }

                // 5. Write changes back to the file
                fs.writeFile(file, result, 'utf8', err => {
                    if (!!err) {
                        return reject(err)
                    }

                    return resolve(result)
                })
            })
        })
    }

    setProjectValues(name, description, identifier, repo) {
        console.log(`Setup.setProjectValues(${name}, ${description}, ${identifier}, ${repo})`)

        if (this.isUpdating === true) {
            throw ('already running, aborting!')
        }

        this.isUpdating = true

        this.replacements = {
            name: name,
            description: description,
            identifier: identifier,
            repo: repo
        }

        const actions = fileList.map(file => {
            return replaceValuesInFile(file, keys, replacements)
        })

        return Promise
            .all(actions)
            .then(result => {
                this.isUpdating = false
                return result
            })
            .catch(error => {
                this.isUpdating = false
                return error
            })
    }
}