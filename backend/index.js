const ParkingSpot = require('../shared/models/ParkingSpot')
const Reservation = require('../shared/models/Reservation')
const User = require('../shared/models/User')

const express = require('express')
const basicAuth = require('express-basic-auth')
const app = express()
const port = 3000

app.use(express.json()) // for parsing json data

app.use(basicAuth( { authorizer: myAuthorizer } ))
 
// TODO
function myAuthorizer(username, password) {
    const userMatches = basicAuth.safeCompare(username, 'customuser')
    const passwordMatches = basicAuth.safeCompare(password, 'custompassword')
 
    return userMatches & passwordMatches
}

function payload(data = null, ok = true, error = null) {
    this.ok = ok
    this.data = data
    this.error = error
}

function fetchRequests(listOfUsers){
    //if(!permission(user_id)) vyhodVyjimku()

    if(listOfUsers.length() == 0){
        return fetchAllRequests()
    }
    else{
        fetchedRequests = []
        for(user in listOfUsers){
            fetchRequests.append(fetchUserRequests(user))
        }
        return fetchRequests
    }
}

function unauthorizedResponse(res) {
    res.send(payload(ok=false, error="Unauthorized"))
}

app.get('/getReservations', (req, res) => {
    req.auth.user, req.auth.password

    listOfUsers = req.body
    try{
        res.send(payload(data=fetchRequests(listOfUsers)))
    }
    catch{
        res.send(payload(ok=false, error="ERROR: Problem with fetching requests."))
    }finally{
        console.log("unable to send error")
    }
})

app.post('/postReservation', (req, res) => {
    let requestedReservation = {} // typu Reservation
    Object.assign(requestedReservation, req.body)

    try {
        let acceptedReservation = getFreeParkingSpot(requestedReservation) // v tyhle funkci overovat, jestli ma user_id prava na to misto
        res.send(payload(data=acceptedReservation))
    }
    catch{
        res.send(payload(ok=false, error="ERROR: There is no free parking spot.")) // TODO nemuze byt problem i s connection?
    }
})

app.delete('/deleteReservation', (req, res) => {
    let requestedReservation = {} // typu Reservation
    Object.assign(requestedReservation, req.body)

    try {
        deleteReservation(requestedReservation)
        res.send(payload(data=null, ok=true))
    }
    catch{
        res.send(payload(ok=false, error="ERROR: Error during deletion of the reservation.")) // TODO nemuze byt problem i s connection?
    }
})









app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})
