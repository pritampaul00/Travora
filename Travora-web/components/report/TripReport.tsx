import { Trip } from "@/types";
import TripSummary from "./TripSummary";

interface Props {
  trip: Trip;
}

export default function TripReport({
  trip,
}: Props) {
  return (
    <div className="mt-12 rounded-xl border bg-[#F8F1DE] p-10">

      <TripSummary summary={trip.summary}
      budgetBreakdown={trip.budgetBreakdown} />
    </div>
  );
}