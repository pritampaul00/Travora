import { TravelState } from "./travel.state";

interface ParsedTravelRequest {
  origin?: string;
  originIata?: string;

  destination?: string;

  days?: number;
  budget?: number;
}

export function createInitialState(
  message: string,
  parsed: ParsedTravelRequest,
): TravelState {
  return {
    message,

    origin: parsed.origin,
    originIata: parsed.originIata,

    destination: parsed.destination,

    days: parsed.days,
    budget: parsed.budget,

    flights: [],

    hotels: [],

    recommendation: undefined,

    itinerary: undefined,

    // report: undefined,
  };
}