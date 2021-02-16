const { Module } = require("module");
const fs = require('fs');
const colors = require('colors');
let salida = '';
const calculo = async(b, l, h) => {
    let n = 0;
    let r = 0;

    try {

        for (var i = 0; i <= h; i++) {
            n = i;
            r = b * i;
            salida += `${b} x ${n} = ${r}\n`;
            await imprime(b, n, r, l, h);
        }
        return `tabla-${b}.txt creada`;

    } catch (err) {
        throw err;
    }

};

const imprime = (b, n, r, l, h) => {
    if (l) {
        if (n === 0) {
            console.log('________________________________'.underline.cyan);
            console.log('Tabla de multiplicar del'.red, colors.blue(b));
            console.log('________________________________'.underline.cyan);
        }
        console.log(`${'El resultado de'.yellow} ${b} ${'x'.cyan} ${n} ${'='.cyan} ${r}`.yellow);
    }
    if (n === h) {
        fs.writeFileSync(`./salida/tabla-${b}.txt`, salida);
    }
};


module.exports = {
    calculo
}