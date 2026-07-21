import { Flight } from "./flight.model";
import { Hotel } from "./hotel.model";

export interface Recommendation {
  recommendedFlight: Flight | null;

  //flightRecommendationReason: string;

  //flightBookingTips: string[];

  recommendedHotel: Hotel | null;

  //hotelRecommendationReason: string;

  //hotelBookingTips: string[];
}