import { DailyPlan } from "@/types";

import ReportSection from "./ReportSection";
import ReportText from "./ReportText";
import SectionHeading from "./SectionHeading";

interface Props {
  dailyPlans: DailyPlan[];
}

export default function DailyItinerary({
  dailyPlans,
}: Props) {
  return (
    <ReportSection>
      <SectionHeading
        number={4}
        title="Daily Itinerary"
      />

      <div className="space-y-10">
        {dailyPlans.map((day) => (
          <article
            key={day.day}
            className="
              overflow-hidden
              rounded-md
              border
              border-[var(--paper-border)]
              bg-[var(--paper)]
            "
          >
            {/* Header */}

            <div
              className="
                flex
                items-center
                justify-between

                border-b
                border-[var(--paper-border)]

                bg-[var(--paper-header)]

                px-8
                py-5
              "
            >
              <div>
                <p
                  className="
                    font-mono
                    text-[12px]
                    font-medium
                    uppercase
                    tracking-[0.22em]
                    text-[var(--paper-muted)]
                  "
                >
                  Day {day.day}
                </p>

                <h3
                  className="
                    mt-2
                    text-3xl
                    font-semibold
                    text-[var(--paper-text)]
                  "
                >
                  {day.title}
                </h3>
              </div>

              <div className="text-right">
                <p
                  className="
                    font-mono
                    text-[12px]
                    font-medium
                    uppercase
                    tracking-[0.22em]
                    text-[var(--paper-muted)]
                  "
                >
                  Estimated Cost
                </p>

                <p
                  className="
                    mt-2
                    text-2xl
                    font-bold
                    text-[var(--paper-text)]
                  "
                >
                  ${day.subtotal}
                </p>
              </div>
            </div>

            {/* Activities */}

            <div>
              {day.activities.map((activity) => (
                <div
                  key={`${day.day}-${activity.time}-${activity.title}`}
                  className="
                    grid
                    grid-cols-[90px_1fr_110px]
                    gap-8

                    border-b
                    border-[var(--paper-border)]

                    px-8
                    py-7

                    last:border-b-0
                  "
                >
                  {/* Time */}

                  <div
                    className="
                      font-mono
                      text-[15px]
                      font-semibold
                      text-[var(--sun)]
                    "
                  >
                    {activity.time}
                  </div>

                  {/* Activity */}

                  <div>
                    <h4
                      className="
                        text-xl
                        font-semibold
                        text-[var(--paper-text)]
                      "
                    >
                      {activity.title}
                    </h4>

                    <div className="mt-2">
                      <ReportText>
                        {activity.description}
                      </ReportText>
                    </div>

                    {activity.location && (
                      <p
                        className="
                          mt-3
                          text-base
                          text-[var(--paper-muted)]
                        "
                      >
                        📍 {activity.location}
                      </p>
                    )}
                  </div>

                  {/* Cost */}

                  <div className="text-right">
                    <p
                      className="
                        font-mono
                        text-[11px]
                        font-medium
                        uppercase
                        tracking-[0.22em]
                        text-[var(--paper-muted)]
                      "
                    >
                      Cost
                    </p>

                    <p
                      className="
                        mt-2
                        text-lg
                        font-semibold
                        text-[var(--paper-text)]
                      "
                    >
                      ${activity.estimatedCost}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </ReportSection>
  );
}


