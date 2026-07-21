import { Injectable, Logger } from "@nestjs/common";

import { TravelState } from "../graph/travel.state";
import { SerpHotelService } from "../tools/serp-hotel.service";

@Injectable()
export class HotelAgent {
  private readonly logger = new Logger(HotelAgent.name);

  constructor(
    private readonly serpHotelService: SerpHotelService,
  ) {}

  async invoke(state: TravelState) {
    this.logger.log("🏨 Hotel Agent Started");

    if (!state.destination) {
      return {
        hotels: [],
      };
    }

    const today = new Date();

    const checkInDate = today
      .toISOString()
      .split("T")[0];

    const checkOut = new Date(today);

    checkOut.setDate(
      today.getDate() + (state.days ?? 5),
    );

    const checkOutDate = checkOut
      .toISOString()
      .split("T")[0];

    this.logger.log(
      `Searching hotels in ${state.destination} (${checkInDate} → ${checkOutDate})`,
    );

    const hotels =
      await this.serpHotelService.searchHotels(
        state.destination,
        checkInDate,
        checkOutDate,
      );

    return {
      hotels,
    };
  }
}