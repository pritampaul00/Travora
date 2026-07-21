import { z } from "zod";

export const ItinerarySchema = z.object({
  summary: z.object({
    destination: z.string(),
    origin: z.string(),
    travelers: z.number(),
    totalDays: z.number(),
    travelDates: z.string(),
    estimatedBudget: z.number(),
    travelStyle: z.string(),
  }),

  flightRecommendationReason: z.string(),

  flightBookingTips: z.array(z.string()).length(5),

  hotelRecommendationReason: z.string(),

  hotelBookingTips: z.array(z.string()).length(5),

  dailyPlans: z.array(
    z.object({
      day: z.number(),
      title: z.string(),
      subtotal: z.number(),

      activities: z.array(
        z.object({
          time: z.string(),
          title: z.string(),
          description: z.string(),
          location: z.string(),
          estimatedCost: z.number(),
        }),
      ),
    }),
  ),

  budgetBreakdown: z.object({
    flights: z.number(),
    hotel: z.number(),
    food: z.number(),
    transportation: z.number(),
    activities: z.number(),
    miscellaneous: z.number(),
    total: z.number(),
    remaining: z.number(),
  }),

  travelTips: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
    }),
  ),

  totalEstimatedCost: z.string(),
});