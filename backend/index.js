const ParkingSpot = require('../shared/models/ParkingSpot')

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var ps = new ParkingSpot()
    ps.name = "Parking spot";
    res.send(ps)
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})
