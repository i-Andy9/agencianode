//archivo para configurar express 
import express from 'express';
import router from './Routes/index.js'
import db from './Config/db.js'

const app = express();

//try conect to db 
db.authenticate()
    .then(()=> console.log('base de datos conectada'))
    .catch(error=>console.log(error))

//definir el puerto
const port = process.env.PORT || 4000; //porcess.env.PORT variable de entorno
 
//habilitar pug 
app.set('view engine', 'pug')

//middleware propio -> get year
app.use((req,res,next)=>{
    
    const year = new Date();
    
    res.locals.ActualYear = year.getFullYear();
    res.locals.nameOfSite = 'Agencia de Viajes'
     
    next();
})

//definir la carpeta publica 
app.use(express.static('public'))

//Agregar Router 
app.use('/', router)

app.listen(port,()=>{
    console.log(`el servidor esta funcionando en el puerto ${port}`);
});