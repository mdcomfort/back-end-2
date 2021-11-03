
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const ctrl = require('./controller')

const {getHouses} = ctrl
const {createHouse} = ctrl
const {updateHouse} = ctrl
const {deleteHouse} = ctrl

// const {
//     getHouses,
//     createHouse,
//     updateHouse,
//     deleteHouse,
// } = require('./controller')

app.get('/api/houses', getHouses)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)
app.delete('/api/houses/:id', deleteHouse)

app.listen(4004, () => console.log("Server is running on 4004."))