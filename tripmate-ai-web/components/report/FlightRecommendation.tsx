import { Flight } from "@/types";

import FlightTimeline from "./FlightTimeline";
import ReportSection from "./ReportSection";
import ReportText from "./ReportText";
import SectionHeading from "./SectionHeading";

interface Props {
  flight: Flight | null;
  reason: string;
  tips: string[];
}

export default function FlightRecommendation({
  flight,
  reason,
  tips,
}: Props) {
  if (!flight) return null;

  return (
    <ReportSection>
      <SectionHeading
        number={2}
        title="Flight Recommendation"
      />

      {reason && (
        <ReportText>
          {reason}
        </ReportText>
      )}

      <FlightTimeline flight={flight} />

      {tips.length > 0 && (
        <div className="space-y-5">
          <h3
            className="
              font-mono
              text-[12px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-[var(--paper-muted)]
            "
          >
            Booking Tips
          </h3>

          <ul className="space-y-4">
            {tips.map((tip) => (
              <li
                key={tip}
                className="flex items-start gap-4"
              >
                <span
                  className="
                    mt-[11px]
                    h-2
                    w-2
                    rounded-full
                    bg-[var(--sun)]
                  "
                />

                <ReportText>
                  {tip}
                </ReportText>
              </li>
            ))}
          </ul>
        </div>
      )}
    </ReportSection>
  );
}