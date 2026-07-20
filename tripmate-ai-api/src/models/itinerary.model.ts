export interface TripSummary {
  destination: string;
  origin: string;
  travelers: number;
  totalDays: number;
  travelDates: string;
  estimatedBudget: number;
  travelStyle: string;
}

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

export interface BudgetBreakdown {
  flights: number;
  hotel: number;
  food: number;
  transportation: number;
  activities: number;
  miscellaneous: number;
  total: number;
  remaining: number;
}

export interface TravelTip {
  title: string;
  description: string;
}

export interface Itinerary {
  summary: TripSummary;

  flightRecommendationReason: string;

  flightBookingTips: string[];

  hotelRecommendationReason: string;

  hotelBookingTips: string[];

  dailyPlans: DailyPlan[];

  budgetBreakdown: BudgetBreakdown;

  travelTips: TravelTip[];

  totalEstimatedCost: string;
}