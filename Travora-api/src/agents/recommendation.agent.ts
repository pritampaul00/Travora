import { Injectable, Logger } from "@nestjs/common";
import { ChatGroq } from "@langchain/groq";

import { TravelState } from "../graph/travel.state";
import { RecommendationSchema } from "../models/recommendation.schema";
import { buildRecommendationPrompt } from "../prompts/recommendation.prompt";

@Injectable()
export class RecommendationAgent {
  private readonly logger = new Logger(
    RecommendationAgent.name,
  );

  private readonly llm = new ChatGroq({
    apiKey: process.env.GROQ_API_KEY!,
    model: "llama-3.3-70b-versatile",
    temperature: 0.1,
  });

  async invoke(state: TravelState) {
    this.logger.log(
      "⭐ Recommendation Agent Started",
    );

    try {
      if (
        state.flights.length === 0 ||
        state.hotels.length === 0
      ) {
        this.logger.warn(
          "No flights or hotels available.",
        );

        return {
          recommendation: {
            recommendedFlight:
              state.flights[0] ?? null,

            recommendedHotel:
              state.hotels[0] ?? null,
          },
        };
      }

      const model =
        this.llm.withStructuredOutput(
          RecommendationSchema,
        );

      const result = await model.invoke(
        buildRecommendationPrompt(state),
      );

      const flightIndex =
        result.selectedFlightIndex;

      const hotelIndex =
        result.selectedHotelIndex;

      if (
        flightIndex < 0 ||
        flightIndex >= state.flights.length
      ) {
        throw new Error(
          `Invalid flight index: ${flightIndex}`,
        );
      }

      if (
        hotelIndex < 0 ||
        hotelIndex >= state.hotels.length
      ) {
        throw new Error(
          `Invalid hotel index: ${hotelIndex}`,
        );
      }

      const recommendation = {
        recommendedFlight:
          state.flights[flightIndex],

        recommendedHotel:
          state.hotels[hotelIndex],
      };

      this.logger.log(
        `Selected Flight Index: ${flightIndex}`,
      );

      this.logger.log(
        `Selected Hotel Index: ${hotelIndex}`,
      );

      this.logger.debug(
        JSON.stringify(
          recommendation,
          null,
          2,
        ),
      );

      this.logger.log(
        "✅ Recommendation completed",
      );

      return {
        recommendation,
      };
    } catch (error) {
      this.logger.error(
        "Recommendation Agent Failed",
        error instanceof Error
          ? error.stack
          : String(error),
      );

      return {
        recommendation: {
          recommendedFlight:
            state.flights[0] ?? null,

          recommendedHotel:
            state.hotels[0] ?? null,
        },
      };
    }
  }
}

// import { Injectable, Logger } from "@nestjs/common";
// import { ChatGroq } from "@langchain/groq";

// import { TravelState } from "../graph/travel.state";
// import { RecommendationSchema } from "../models/recommendation.schema";
// import { buildRecommendationPrompt } from "../prompts/recommendation.prompt";

// @Injectable()
// export class RecommendationAgent {
//   private readonly logger = new Logger(
//     RecommendationAgent.name,
//   );

//   private readonly llm = new ChatGroq({
//     apiKey: process.env.GROQ_API_KEY!,
//     model: "llama-3.3-70b-versatile",
//     temperature: 0.2,
//   });

//   async invoke(state: TravelState) {
//     this.logger.log("⭐ Recommendation Agent Started");

//     try {
//       const model =
//         this.llm.withStructuredOutput(
//           RecommendationSchema,
//         );

//       const result = await model.invoke(
//         buildRecommendationPrompt(state),
//       );

//       this.logger.log(result);

//       const recommendation = {
//         recommendedFlight:
//           state.flights[result.selectedFlightIndex] ?? null,

//         recommendedHotel:
//           state.hotels[result.selectedHotelIndex] ?? null,
//       };

//       this.logger.log("✅ Recommendation completed");

//       return {
//         recommendation,
//       };
//     } catch (error) {
//       this.logger.error(
//         "Recommendation Agent Failed",
//         error instanceof Error
//           ? error.stack
//           : String(error),
//       );

//       return {
//         recommendation: {
//           recommendedFlight: null,
//           recommendedHotel: null,
//         },
//       };
//     }
//   }
// }

