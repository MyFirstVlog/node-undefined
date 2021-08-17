const fs = require('fs')
const colors = require('colors');
const { isString } = require('util');


const crearArchivo = async (base = 5, lista = false, limite=10)=>{

    try {
        let list = []
        for(let i = 0 ; i<=limite ; i++){
            list.push(i)
        }
        let salida,consola = "";
        console.log('salida',salida)
    
        list.forEach((each)=>{
            consola+= `${colors.green(base)}x${colors.cyan(each)}=${base*each}\n`
            salida += `${base}x${each}=${base*each}\n`
        })    
        if(lista){
            console.log('=================='.rainbow)
            console.log(`   Tabla del ${colors.red(base)}`)
            console.log('=================='.rainbow)
            console.log(consola)
        } 
        
            
        fs.writeFileSync(`tabla-${base}.txt`,salida)
        
        return(`tabla-${base}.txt`)            
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}

//Code take into account mistakes 

/**
 * 
 * const crearArchivo =(base = 5)=>{

    const list = [0,1,2,3,4,5,6,7,8,9,10]
    let salida = ''

    console.log('==================')
    console.log(`   Tabla del ${base}`)
    console.log('==================')

    return new Promise((resolve,reject)=>{

        list.forEach((each)=>{
            salida += `${base}x${each}=${base*each} \n`
        })    
        console.log(salida)
        try {
            fs.writeFileSync(`tabla-${base}.txt`,salida)
            resolve(`tabla-${base}.txt`)            
        } catch (error) {
            reject(error)
        }
    })

}

 * 
 * 
 */