const fs = require('fs');
const colors = require('colors');
const crearArchivo = async( base = 5, listar = false, hasta ) => {

    let salida = '';

    try {   
        for(let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
        };

        fs.writeFileSync( `./output/tabla-${base}.txt`, salida);
        
        if(listar){
            console.log('============'.green);
            console.log(`Tabla del: ${base}`);
            console.log('============'.green);
            console.log(salida)
        }
    
        return  `tabla-${base}.txt`;
    } catch(err){
        throw err;
    }
}

module.exports = {
    crearArchivo
}