const {crearArchivo} = require('.\\helpers\\multiplicar')
const argv = require('.\\config\\yargs')
const colors = require('colors');
 
console.clear()
//console.log(argv)
//console.log(argv.base)

//fs.writeFileSync()

crearArchivo(argv.b, argv.l, argv.e)
.then((fileName)=> console.log(fileName, 'created'.random))
.catch((err) => console.log(err))


//fs.writeFile()
/*fs.writeFile(`tabla-${baseNumber}.txt`,salida, (err) =>{
    if(err){
        throw err
    }
    console.log('file saved')
    
})*/


/*
const [,,argBase = 'base=5'] = process.argv
const [,baseNumber = 5] = argBase.split('=')
console.log(baseNumber)
 */