const { calculo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

calculo(argv.base, argv.l, argv.h)
    .then(resp => console.log(resp.cyan))
    .catch(err => console.log(err.red));