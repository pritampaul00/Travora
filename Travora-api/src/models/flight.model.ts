export interface Flight {
  airline: string;
  flightNumber: string;

  departure: string;
  arrival: string;

  departureTime: string;
  arrivalTime: string;

  price: string;

  duration?: string;
  travelClass?: string;
}