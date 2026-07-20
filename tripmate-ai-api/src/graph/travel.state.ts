import { Annotation } from "@langchain/langgraph";

import { Flight } from "../models/flight.model";
import { Hotel } from "../models/hotel.model";
import { Itinerary } from "../models/itinerary.model";
import { Recommendation } from "../models/recommendation.model";

export const TravelStateAnnotation = Annotation.Root({
  message: Annotation<string>(),

  origin: Annotation<string | undefined>(),
  originIata: Annotation<string | undefined>(),

  destination: Annotation<string | undefined>(),

  days: Annotation<number | undefined>(),
  budget: Annotation<number |undefined>(),

  flights: Annotation<Flight[]>({
    default: () => [],
    reducer: (_, value) => value,
  }),

  hotels: Annotation<Hotel[]>({
    default: () => [],
    reducer: (_, value) => value,
  }),

  recommendation: Annotation<Recommendation | undefined>(),

  itinerary: Annotation<Itinerary | undefined>(),

  // report: Annotation<string | undefined>(),
});

export type TravelState =
  typeof TravelStateAnnotation.State;