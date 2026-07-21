import { Injectable, Logger } from "@nestjs/common";
import axios from "axios";
import { Hotel } from "../models/hotel.model";

@Injectable()
export class SerpHotelService {
  private readonly logger = new Logger(SerpHotelService.name);

  private readonly apiKey = process.env.SERP_API_KEY!;

  async searchHotels(
    destination: string,
    checkInDate: string,
    checkOutDate: string,
  ): Promise<Hotel[]> {
    try {
      this.logger.log(
        `Searching hotels in ${destination}`,
      );

      const { data } = await axios.get(
        "https://serpapi.com/search.json",
        {
          params: {
            engine: "google_hotels",
            q: destination,
            check_in_date: checkInDate,
            check_out_date: checkOutDate,
            currency: "USD",
            gl: "us",
            hl: "en",
            api_key: this.apiKey,
          },
        },
      );

      return (data.properties ?? []).map(
        (hotel: any): Hotel => ({
          name: hotel.name,

          address: hotel.address ?? "",

          description:
            hotel.type ?? "",

          website: hotel.link ?? "",

          rating: hotel.overall_rating,

          reviews: hotel.reviews,

          price:
            hotel.rate_per_night?.lowest ??
            hotel.price,

          thumbnail: hotel.images?.[0]?.thumbnail,
        }),
      );
    } catch (error: any) {
      this.logger.error(
        error.response?.data ?? error.message,
      );

      return [];
    }
  }
}