import { Injectable, Logger } from "@nestjs/common";
import axios from "axios";
import { Hotel } from "../models/hotel.model";

@Injectable()
export class TavilyService {
  private readonly logger = new Logger(TavilyService.name);

  private readonly apiKey = process.env.TAVILY_API_KEY!;

  async searchHotels(
    destination: string,
    budget?: number,
  ): Promise<Hotel[]> {
    try {
      const query = `
Find 5 individual hotels in ${destination}.
Budget: ${budget ? `$${budget}` : "Any"}.
Include hotel name, area, approximate price, star rating, short description and official website if available.
Exclude YouTube, blogs, Tripadvisor lists and "Top 10 Hotels" pages.
`;
      const { data } = await axios.post(
        "https://api.tavily.com/search",
        {
          api_key: this.apiKey,
          query,
          search_depth: "advanced",
          include_answer: false,
          max_results: 10,
        },
      );

      const results = (data.results ?? []).filter(
        (result: any) => {
          const url = result.url.toLowerCase();
          const title = result.title.toLowerCase();

          return (
            !url.includes("youtube.com") &&
            !url.includes("youtu.be") &&
            !url.includes("tripadvisor.com") &&
            !url.includes("reddit.com") &&
            !url.includes("blog") &&
            !title.includes("top 10") &&
            !title.includes("best hotels") &&
            !title.includes("where to stay") &&
            !title.includes("travel guide")
          );
        },
      );

      return results.slice(0, 5).map(
        (hotel: any): Hotel => ({
          name: hotel.title,
          address: hotel.url,
          description: hotel.content,
          website: hotel.url,
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