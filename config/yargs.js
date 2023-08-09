const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        desc: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        desc: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        desc: 'Hasta que numero queremos la tabla de multiplicar'
    })
    .check((argv)  => {
        if( isNaN(argv.b) ) {
            throw new Error('La base tiene que ser un numero');
        }
        if( isNaN(argv.h) ) {
            throw new Error('Hasta donde queremos la tabla, tiene que ser un numero');
        }
        return true;
    })
    .argv;

module.exports = argv;