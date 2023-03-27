export class FlightDto {
    id: string;
    departureAirport: string;
    arrivalAirport: string;
    departureDateTime: string;
    arrivalDateTime: Date;
    price: number;
}