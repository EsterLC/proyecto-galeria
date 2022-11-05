import {Router} from 'express'

const rutas = Router()

rutas.get('/', (req, res) => {
    return res.json({
        msg: 'BIENVENID@ A SU MINI GALERIA'
    })
});

export default rutas