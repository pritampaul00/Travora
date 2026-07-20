import { TravelState } from "../graph/travel.state";

export function buildItineraryPrompt(
  state: TravelState,
): string {
  return `
You are a senior travel consultant creating a professional travel itinerary.

The flight and hotel have already been selected.

Do NOT recommend another flight.

Do NOT recommend another hotel.

Your job is to explain the selected recommendations and generate a complete travel itinerary.

========================
TRIP DETAILS
========================

Origin:
${state.origin}

Destination:
${state.destination}

Duration:
${state.days} days

Budget:
$${state.budget}

========================
SELECTED FLIGHT
========================

${JSON.stringify(
  state.recommendation?.recommendedFlight,
  null,
  2,
)}

========================
SELECTED HOTEL
========================

${JSON.stringify(
  state.recommendation?.recommendedHotel,
  null,
  2,
)}

========================
RECOMMENDATIONS
========================

The flight and hotel have already been selected.

Generate:

flightRecommendationReason

Write 2 to 3 concise sentences explaining why this flight is a good choice based on:

• Price
• Duration
• Convenience
• Overall value

Generate exactly five practical flight booking tips.

Return them as:

flightBookingTips

Examples:

• Book 6 to 8 weeks before departure.
• Compare Google Flights with Skyscanner.
• Midweek departures are usually cheaper.
• Enable fare alerts.
• Be flexible with travel dates.

Generate:

hotelRecommendationReason

Write 2 to 3 concise sentences explaining why this hotel is a good choice based on:

• Location
• Value for money
• Reviews
• Amenities

Generate exactly five practical hotel booking tips.

Return them as:

hotelBookingTips

Examples:

• Book refundable rates when possible.
• Stay near public transport.
• Breakfast included is usually better value.
• Compare Booking.com and Agoda.
• Read recent guest reviews.

========================
TRIP SUMMARY
========================

Generate:

summary

Include:

destination

origin

travelers

travelDates

totalDays

estimatedBudget

travelStyle

Travel style must be exactly one of:

Budget
Luxury
Family
Adventure
Business
Backpacking
Couple
Solo

Travel dates should be realistic based on today's date.

========================
DAY BY DAY ITINERARY
========================

Generate a realistic itinerary for every day.

For each day:

• Give the day a title.
• Start around 9:00 AM.
• Finish around 9:00 PM.
• Keep nearby attractions together.
• Avoid unnecessary travel across the city.
• Avoid repeating attractions.

Generate 5 to 8 activities per day.

Every day should include:

• Breakfast
• Lunch
• Dinner

Fill the remaining activities with sightseeing, museums, shopping, parks, cultural attractions, entertainment or leisure activities.

Activities must be ordered chronologically.

Every activity must contain:

time

title

description

location

estimatedCost

Calculate:

subtotal

========================
BUDGET
========================

Create a budgetBreakdown object.

Fields:

flights

hotel

food

transportation

activities

miscellaneous

total

remaining

Rules:

• The category values must add up to total.
• remaining = max(estimatedBudget - total, 0)
• Never return a negative remaining value.
• Stay within the user's budget whenever possible.

Use the selected flight when estimating flight costs.

Use the selected hotel when estimating hotel costs.

========================
TRAVEL TIPS
========================

Generate at least five practical travel recommendations.

Each tip must contain:

title

description

Cover topics such as:

• Transportation
• Currency
• Weather
• Local etiquette
• Safety
• SIM card / Internet
• Useful apps
• Emergency numbers

========================
TOTAL ESTIMATED COST
========================

Generate:

totalEstimatedCost

Format example:

"1425 USD"

========================
IMPORTANT
========================

Use ONLY the selected flight.

Use ONLY the selected hotel.

Do NOT invent flights.

Do NOT invent hotels.

Do NOT change the selected flight.

Do NOT change the selected hotel.

Return ONLY valid JSON that exactly matches the provided schema.

Every required field must be present.

Do not omit any field.

Do not include additional fields.

Do not return markdown.

Do not return explanations.

Do not wrap the JSON inside code fences.
`;
}