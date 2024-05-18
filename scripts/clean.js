const sh = require('shelljs');
const upath = require('@ewizardjs/upath');

const destPath = upath.resolve(upath.dirname(__filename), '../dist');

sh.rm('-rf', `${destPath}/*`)

