import express from 'express' //importar express
import {conectar, agregarContacto} from './src/mysql_conector.js'
const app = express() // iniciamos express

//Iniciamos servidor
app.listen('8000',function(){
    console.log('aplicacion iniciada en el puerto 8000')
})

//Conf de pug
app.set('views','./vistas')
app.set('view engine','pug')

//conf de archivos estaticos
app.use(express.static('./vistas'))
app.use(express.static('./src'))
app.use(express.static('./css'))


app.get('/',function(req, res){
    /* res.send('ap iniciada') */
   
    res.render('index', {titulo:'Aplicacion de contactos'})
})
app.get('/agregar/:nombre/:numero', function(req, res){
    let nombre = req.params.nombre
    let numero = req.params.numero
    agregarContacto(numero, nombre)
    res.redirect('/')
})