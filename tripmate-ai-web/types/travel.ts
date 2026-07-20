import { Trip } from "./itinerary";

export interface TravelResponse {
  success: boolean;
  trip: Trip;
}