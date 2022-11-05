import {Router} from 'express'

const rutas = Router()

rutas.post('/api/imagenes/upload', async (req, res) => {})

rutas.get('/api/imagenes', async (req, res) => {})

rutas.get('/api/imagenes/:id', async (req, res) => {})

rutas.delete('/api/imagenes/:id', async (req, res) => {})

export default rutas