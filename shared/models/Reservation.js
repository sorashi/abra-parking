class Reservation {
    constructor(id, userId, parkingSpotId, timeBegin, timeEnd) {
        this.id = id
        this.userId = userId
        this.parkingSpotId = parkingSpotId // id prideleneho spotu, defaultne -1
        this.timeBegin = timeBegin
        this.timeEnd = timeEnd
    }
}

module.exports = Reservation