const fs = require('fs')

RegExp.escape = function (s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
}

const CONFIG_URL = './cw.config.json'

let DEFAULTS = {
    keys: {
        name: '${projectName}',
        description: '${projectDescription}',
        identifier: '${appIdentifier}',
        repo: '{$projectRepoUrl}'
    },
    fileList: [
        './config.xml',
        './ionic.config.json',
        './package.json',
        './package-lock.json',
        './src/index.html'
    ]
}


exports.Setup = class {

    replaceValuesInFile(file, searchValueMap, replaceValueMap) {

        return new Promise((resolve, reject) => {

            fs.readFile(file, 'utf8', (err, data) => {
                if (!!err) {
                    return reject(err)
                }

                // 1. Break the values out to two arrays
                const _sv = Object.values(searchValueMap)
                const _rv = Object.values(replaceValueMap)

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

    loadConfig() {
        console.log('Setup.loadConfig()')

        return new Promise((resolve, reject) => {
            fs.readFile(CONFIG_URL, 'utf8', (err, data) => {
                let _defaults = {
                    ...DEFAULTS
                }

                if (!!err) {
                    console.error(err)
                    return resolve(_defaults)
                }

                try {
                    console.log('Config file loaded, attempting to parse and apply...')

                    let _loaded = JSON.parse(data)

                    console.dir(_loaded)

                    return resolve({
                        ...DEFAULTS,
                        _loaded
                    })
                } catch (error) {
                    console.error(error)
                    return resolve(_defaults)
                }
            })
        })
    }

    setProjectValues(name, description, identifier, repo) {
        console.log('Setup.setProjectValues()', name, description, identifier, repo)

        let _replacements = {
            name: name,
            description: description,
            identifier: identifier,
            repo: repo || 'SET ME'
        }

        return this
            .loadConfig()
            .then(config => {
                const actions = config.fileList
                    .map(file => this.replaceValuesInFile(file, config.keys, _replacements))

                return Promise.all(actions)
            })
            .catch(error => console.error(error))
    }
}