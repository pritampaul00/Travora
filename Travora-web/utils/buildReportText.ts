import { Trip } from "@/types";

export function buildReportText(
  trip: Trip,
): string {
  const flight = trip.recommendedFlight;
  const hotel = trip.recommendedHotel;

  const lines: string[] = [];

  lines.push("TRAVEL ITINERARY");
  lines.push("");

  lines.push("TRIP SUMMARY");
  lines.push("------------------------------");
  lines.push(`Destination : ${trip.summary.destination}`);
  lines.push(`Origin      : ${trip.summary.origin}`);
  lines.push(`Travelers   : ${trip.summary.travelers}`);
  lines.push(`Duration    : ${trip.summary.totalDays} Days`);
  lines.push(`Travel Style: ${trip.summary.travelStyle}`);
  lines.push(`Budget      : $${trip.summary.estimatedBudget}`);
  lines.push(`Dates       : ${trip.summary.travelDates}`);
  lines.push("");

  lines.push("FLIGHT");
  lines.push("------------------------------");

  if (flight) {
    lines.push(`${flight.airline} (${flight.flightNumber})`);
    lines.push(
      `${flight.departure} ${flight.departureTime}`,
    );
    lines.push(
      `${flight.arrival} ${flight.arrivalTime}`,
    );
    lines.push(`Duration : ${flight.duration} mins`);
    lines.push(`Price    : ${flight.price}`);
    lines.push("");

    if (trip.flightRecommendationReason) {
      lines.push("Why this flight?");
      lines.push(
        trip.flightRecommendationReason,
      );
      lines.push("");
    }

    if (trip.flightBookingTips.length) {
      lines.push("Booking Tips");

      trip.flightBookingTips.forEach((tip) =>
        lines.push(`• ${tip}`),
      );

      lines.push("");
    }
  } else {
    lines.push("No flight selected.");
    lines.push("");
  }

  lines.push("HOTEL");
  lines.push("------------------------------");

  if (hotel) {
    lines.push(hotel.name);

    if (hotel.address)
      lines.push(hotel.address);

    if (hotel.rating)
      lines.push(
        `Rating : ${hotel.rating} ⭐`,
      );

    if (hotel.price)
      lines.push(`Price : ${hotel.price}`);

    lines.push("");

    if (trip.hotelRecommendationReason) {
      lines.push("Why this hotel?");
      lines.push(
        trip.hotelRecommendationReason,
      );
      lines.push("");
    }

    if (trip.hotelBookingTips.length) {
      lines.push("Booking Tips");

      trip.hotelBookingTips.forEach((tip) =>
        lines.push(`• ${tip}`),
      );

      lines.push("");
    }
  } else {
    lines.push("No hotel selected.");
    lines.push("");
  }

  lines.push("DAY BY DAY ITINERARY");
  lines.push("------------------------------");

  trip.dailyPlans.forEach((day) => {
    lines.push(
      `Day ${day.day}: ${day.title}`,
    );

    day.activities.forEach((activity) => {
      lines.push(
        `${activity.time} • ${activity.title}`,
      );

      lines.push(
        `  ${activity.description}`,
      );

      lines.push(
        `  Location: ${activity.location}`,
      );

      lines.push(
        `  Cost: $${activity.estimatedCost}`,
      );

      lines.push("");
    });

    lines.push(
      `Subtotal: $${day.subtotal}`,
    );

    lines.push("");
  });

  lines.push("ESTIMATED BUDGET");
  lines.push("------------------------------");

  lines.push(
    `Flights         : $${trip.budgetBreakdown.flights}`,
  );

  lines.push(
    `Hotel           : $${trip.budgetBreakdown.hotel}`,
  );

  lines.push(
    `Food            : $${trip.budgetBreakdown.food}`,
  );

  lines.push(
    `Transportation  : $${trip.budgetBreakdown.transportation}`,
  );

  lines.push(
    `Activities      : $${trip.budgetBreakdown.activities}`,
  );

  lines.push(
    `Miscellaneous   : $${trip.budgetBreakdown.miscellaneous}`,
  );

  lines.push(
    `Total           : $${trip.budgetBreakdown.total}`,
  );

  lines.push(
    `Remaining       : $${trip.budgetBreakdown.remaining}`,
  );

  lines.push("");

  lines.push("FINAL RECOMMENDATIONS");
  lines.push("------------------------------");

  trip.travelTips.forEach((tip) => {
    lines.push(`${tip.title}`);
    lines.push(tip.description);
    lines.push("");
  });

  lines.push("Have a wonderful trip!");

  return lines.join("\n");
}