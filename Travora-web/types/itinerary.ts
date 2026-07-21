import { Flight } from "./flight";
import { Hotel } from "./hotel";
import { BudgetBreakdown } from "./budget";

export interface Activity {
  time: string;
  title: string;
  description: string;
  location: string;
  estimatedCost: number;
}

export interface DailyPlan {
  day: number;
  title: string;
  subtotal: number;
  activities: Activity[];
}

export interface TripSummary {
  destination: string;
  origin: string;
  travelers: number;
  totalDays: number;
  travelDates: string;
  estimatedBudget: number;
  travelStyle: string;
}

export interface TravelTip {
  title: string;
  description: string;
}

export interface Trip {
  summary: TripSummary;

  recommendedFlight: Flight | null;
  flightRecommendationReason: string;
  flightBookingTips: string[];

  recommendedHotel: Hotel | null;
  hotelRecommendationReason: string;
  hotelBookingTips: string[];

  dailyPlans: DailyPlan[];

  budgetBreakdown: BudgetBreakdown;

  travelTips: TravelTip[];

  availableFlights: Flight[];

  availableHotels: Hotel[];

  totalEstimatedCost: string;
}