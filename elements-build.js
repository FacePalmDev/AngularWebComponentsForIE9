const fs = require('fs-extra');

const elements = 'demo';
const distAssets = './dist/angularElements/assets/';
const distStyles = './dist/angularElements/styles.css';
const outputStyles = elements + '/styles.css';
const outputAssets = elements + '/assets/';

const fileEncoding = 'utf8';
const fileSystemModule = 'fs';

(async function build() {
    
    const files = [
        'runtime.js',
        'polyfills.js',
        'scripts.js',
        'main.js'
    ]

    await fs.ensureDir(elements)

    for (let i = 0; i < files.length; i++) {
        await fs.copyFile('./dist/angularElements/' + files[i], elements + '/' + files[i]).catch(console.log)
    }

    await fs.copyFile(distStyles, outputStyles)
    await fs.copy(distAssets, outputAssets)

    for (let i = 0; i < files.length; i++) {

        const fileSystem = require(fileSystemModule)
        const filePath = elements + '/' + files[i];

        fileSystem.readFile(filePath, fileEncoding, function (err, data) {
            if (err) {
                return console.log(err);
            }
            const result = data.replace(/const /g, 'var');

            fileSystem.writeFile(filePath, result, fileEncoding, function (err) {
                if (err) return console.log(err);
            });

        });
    }
})();