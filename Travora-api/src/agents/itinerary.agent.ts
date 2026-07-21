import { Injectable, Logger } from "@nestjs/common";
import { ChatGroq } from "@langchain/groq";

import { TravelState } from "../graph/travel.state";
import { ItinerarySchema } from "../models/itinerary.schema";
import { buildItineraryPrompt } from "../prompts/itinerary.prompt";

@Injectable()
export class ItineraryAgent {
  private readonly logger = new Logger(ItineraryAgent.name);

  private readonly llm = new ChatGroq({
    apiKey: process.env.GROQ_API_KEY!,
    model: "llama-3.3-70b-versatile",
    temperature: 0.2,
    maxTokens: 5000,
  });

  async invoke(state: TravelState) {
    this.logger.log("📝 Itinerary Agent Started");

    try {
      if (!state.recommendation?.recommendedFlight) {
        this.logger.warn(
          "No recommended flight available.",
        );
      }

      if (!state.recommendation?.recommendedHotel) {
        this.logger.warn(
          "No recommended hotel available.",
        );
      }

      const structuredModel =
        this.llm.withStructuredOutput(
          ItinerarySchema,
        );

      // this.logger.log(
      //   buildItineraryPrompt(state),
      // );

      const itinerary =
        await structuredModel.invoke(
          buildItineraryPrompt(state),
        );

      this.logger.debug(
        "Generated itinerary:\n" +
        JSON.stringify(itinerary, null, 2),
      );

      return {
        itinerary,
      };
    } catch (error) {
      this.logger.error(
        "Failed to generate itinerary",
        error instanceof Error
          ? error.stack
          : String(error),
      );

      return {
        itinerary: undefined,
      };
    }
  }
}