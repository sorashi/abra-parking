import {ParkingSpot, User, Reservation } from 'shared'
import ApiClient from './ApiClient'

import express from 'express'
import cors from 'cors'
const app = express()
const port = 3001

app.use(express.json()) // for parsing json data
app.use(express.urlencoded({ extended: true }))
app.use(cors())

class Payload {
    public data: any | null;
    public ok: boolean;
    public error: string;
    constructor(data:any | null = null, ok:boolean = true, error: string | null = null) {
        this.data = data;
        this.ok = ok;
        this.error = error;
    }
}

function fetchRequests(listOfUsers){
    //if(!permission(user_id)) vyhodVyjimku()

    // if(listOfUsers.length() == 0){
    //     return fetchAllRequests()
    // }
    // else{
    //     fetchedRequests = []
    //     for(user in listOfUsers){
    //         fetchRequests.append(fetchUserRequests(user))
    //     }
    //     return fetchRequests
    // }
}

function unauthorizedResponse(res) {
    res.send(new Payload(null, false, "Unauthorized"))
}

// requires username and password in body
// returns User
app.post('/login', async (req, res) => {
    let username = req.body.username
    let password = req.body.password
    let user = null
    try {
        user = await ApiClient.getMe(username, password)
    }
    catch { // the only error type is bad credentials
        unauthorizedResponse(res)
        return
    }
    res.send(new Payload(user))
})

app.get('/getReservations', (req, res) => {
    // req.auth.user, req.auth.password
    //
    // listOfUsers = req.body
    // try {
    //     res.send(payload(data=fetchRequests(listOfUsers)))
    // }
    // catch {
    //     res.send(payload(ok=false, error="ERROR: Problem with fetching requests."))
    // } finally {
    //     console.log("unable to send error")
    // }
})

app.post('/postReservation', (req, res) => {
    // let requestedReservation = {} // typu Reservation
    // Object.assign(requestedReservation, req.body)
    //
    // try {
    //     let acceptedReservation = getFreeParkingSpot(requestedReservation) // v tyhle funkci overovat, jestli ma user_id prava na to misto
    //     res.send(payload(data=acceptedReservation))
    // }
    // catch{
    //     res.send(payload(ok=false, error="ERROR: There is no free parking spot.")) // TODO nemuze byt problem i s connection?
    // }
})

app.delete('/deleteReservation', (req, res) => {
    // let requestedReservation = {} // typu Reservation
    // Object.assign(requestedReservation, req.body)
    //
    // try {
    //     deleteReservation(requestedReservation)
    //     res.send(payload(data=null, ok=true))
    // }
    // catch{
    //     res.send(payload(ok=false, error="ERROR: Error during deletion of the reservation.")) // TODO nemuze byt problem i s connection?
    // }
})









app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})
