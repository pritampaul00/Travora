import { z } from "zod";

export const RecommendationSchema = z.object({
  selectedFlightIndex: z.number().int().min(0),

  selectedHotelIndex: z.number().int().min(0),
});