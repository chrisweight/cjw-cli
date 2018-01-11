const fs = require('fs')

RegExp.escape = function (s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

const keys = {
    name: '${projectName}',
    description: '${projectDescription}',
    identifier: '${appIdentifier}',
    repo: '{$projectRepoUrl}'
}

// this presumes directory has been set appropriately, could definitely
// be improved!
const fileList = [
    './config.xml',
    './ionic.config.json',
    './package.json',
    './src/index.html'
]

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

    setProjectValues(name, description, identifier, repo) {
        console.log('Setup.setProjectValues()', name, description, identifier, repo)

        let _replacements = {
            name: name,
            description: description,
            identifier: identifier,
            repo: repo || 'SET ME'
        }

        const actions = fileList
            .map(file => this.replaceValuesInFile(file, keys, _replacements))

        return Promise.all(actions)
    }
}