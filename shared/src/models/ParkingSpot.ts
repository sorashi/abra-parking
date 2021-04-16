import Reservation from "./Reservation";

export default class ParkingSpot {
    public id: number;
    public isFull: boolean;
    public listOfReservations: Reservation[];
    constructor(id, isFull, listOfReservations) {
        this.id = id
        this.isFull = isFull
        this.listOfReservations = listOfReservations
    }
}