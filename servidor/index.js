import express from 'express'
import cargaArchivos from 'express-fileupload'

import indexrutas from './rutas/galeria'
import rutasImagen from './rutas/rutas_imagenes'

const app = express()

app.set('port', process.env.PORT || 4000);

app.use(cargaArchivos({
    tempFileDir: '/temp'
}))
app.use(indexrutas)
app.use(rutasImagen)

app.listen(app.get('port'))
console.log('Servidor en el puerto: ', app.get('port'))

