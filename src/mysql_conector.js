//importar mysql
import mysql from 'mysql'

//crear la conexion
const conector = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mibd'
})

const conectar=()=>{
    conector.connect(err =>{
        if(err) throw err
        console.log('conectado')
    })
}

const agregarContacto=(numero, nombre) => {
    const sql = `INSERT INTO contactos (id_agenda, numero_contacto, nombre_contacto) VALUES (${null}, ${numero}, "${nombre}")`
    conector.query(sql, function(err, result, filed){
        if(err)throw err
        console.log(result)
    })
}

export {conectar, agregarContacto}