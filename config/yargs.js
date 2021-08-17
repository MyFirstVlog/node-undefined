const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'This the base which the code will operate with'
    }).option('l',{
        alias:'listar',
        type: 'boolean',
        default: false,
        describe: 'List the operations'
    }).option('e',{
        alias: 'edge',
        type: 'number',
        describe: 'Param of the max lim of rows'
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un numero'
        }
        return true
      })
    .argv

module.exports = argv