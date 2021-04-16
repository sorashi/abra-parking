export default class Reservation {
    public id: number;
    public userId: number;
    public parkingSpotId: number;
    public timeBegin: number;
    public timeEnd: number;
    constructor(id, userId, parkingSpotId, timeBegin, timeEnd) {
        this.id = id
        this.userId = userId
        this.parkingSpotId = parkingSpotId // id prideleneho spotu, defaultne -1
        this.timeBegin = timeBegin
        this.timeEnd = timeEnd
    }
}