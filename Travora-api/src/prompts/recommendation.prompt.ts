import { TravelState } from "../graph/travel.state";

export function buildRecommendationPrompt(
  state: TravelState,
): string {
  return `
You are a senior travel consultant.

Your ONLY task is to select the best flight and the best hotel.

Do NOT explain your choices.

Do NOT generate booking tips.

Do NOT generate an itinerary.

Do NOT generate a budget.

Do NOT generate travel tips.

========================
TRIP DETAILS
========================

Origin:
${state.origin}

Destination:
${state.destination}

Trip Duration:
${state.days} days

Budget:
$${state.budget}

========================
AVAILABLE FLIGHTS
========================

${state.flights
  .map(
    (flight, index) => `
Index: ${index}

Airline: ${flight.airline}
Flight Number: ${flight.flightNumber}
Departure: ${flight.departure}
Arrival: ${flight.arrival}
Departure Time: ${flight.departureTime}
Arrival Time: ${flight.arrivalTime}
Price: ${flight.price}
Duration: ${flight.duration} minutes
Travel Class: ${flight.travelClass}
`,
  )
  .join("\n")}

========================
AVAILABLE HOTELS
========================

${state.hotels
  .map(
    (hotel, index) => `
Index: ${index}

Name: ${hotel.name}
Price: ${hotel.price ?? "Unknown"}
Rating: ${hotel.rating ?? "Unknown"}
Reviews: ${hotel.reviews ?? "Unknown"}
Address: ${hotel.address}
Website: ${hotel.website}
`,
  )
  .join("\n")}

========================
FLIGHT SELECTION RULES
========================

Choose ONE flight.

Selection priority:

1. Lowest price
2. Shortest duration
3. Convenient departure time
4. Convenient arrival time

========================
HOTEL SELECTION RULES
========================

Choose ONE hotel.

Selection priority:

1. Best value
2. Highest rating
3. Highest review count
4. Good location
5. Fits the user's budget

========================
OUTPUT
========================

Return ONLY valid JSON.

{
  "selectedFlightIndex": 0,
  "selectedHotelIndex": 0
}

Rules:

• Return ONLY the two indices.
• The indices must exist.
• Do NOT return flight details.
• Do NOT return hotel details.
• Do NOT return explanations.
• Do NOT return markdown.
• Do NOT return code fences.
`;
}