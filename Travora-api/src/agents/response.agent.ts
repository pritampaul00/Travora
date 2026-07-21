import { Injectable, Logger } from "@nestjs/common";
import { TravelState } from "../graph/travel.state";

@Injectable()
export class ResponseAgent {
  private readonly logger = new Logger(ResponseAgent.name);

  async invoke(state: TravelState) {
    this.logger.log("📦 Building final response");

    return {
      success: true,

      // report: state.report ?? "",

      trip: {
        summary: state.itinerary?.summary,

        recommendedFlight:
          state.recommendation?.recommendedFlight ?? null,

        flightRecommendationReason:
          state.itinerary?.flightRecommendationReason ?? "",

        flightBookingTips:
          state.itinerary?.flightBookingTips ?? [],

        recommendedHotel:
          state.recommendation?.recommendedHotel ?? null,

        hotelRecommendationReason:
          state.itinerary?.hotelRecommendationReason ?? "",

        hotelBookingTips:
          state.itinerary?.hotelBookingTips ?? [],

        dailyPlans:
          state.itinerary?.dailyPlans ?? [],

        budgetBreakdown:
          state.itinerary?.budgetBreakdown ?? {
            flights: 0,
            hotel: 0,
            food: 0,
            transportation: 0,
            activities: 0,
            miscellaneous: 0,
            total: 0,
            remaining: 0,
          },

        travelTips:
          state.itinerary?.travelTips ?? [],

        totalEstimatedCost:
          state.itinerary?.totalEstimatedCost ?? "",

        availableFlights:
          state.flights,

        availableHotels:
          state.hotels,
      },
    };
  }
}