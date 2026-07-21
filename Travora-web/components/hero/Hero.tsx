"use client";

import { useState } from "react";

import PlannerPanel from "@/components/planner/PlannerPanel";
import ReportViewer from "@/components/report/ReportViewer";
import { TravelResponse } from "@/types";

export default function Hero() {
  const [trip, setTrip] = useState<TravelResponse | null>(null);

  return (
    <>
      <div
        className="page-bg"
        aria-hidden="true"
      >
        <svg
          className="route"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <path d="M -20 660 C 280 560 360 300 640 320 S 1020 180 1240 60" />
          <circle cx={640} cy={320} r={4} />
        </svg>
      </div>

      <main>
        <div className="app-container">
          <header className="masthead">
            <svg
              className="sun"
              viewBox="0 0 400 220"
              aria-hidden="true"
            >
              <circle cx={200} cy={200} r={120} />
              <circle cx={200} cy={200} r={155} />
              <circle cx={200} cy={200} r={190} />
            </svg>

            <span className="eyebrow">
              MULTI AGENT TRAVEL PLANNER
            </span>

            <h1>
              Travora
            </h1>

            <p className="lede">
              Plan flights, discover hotels, generate complete
              day by day itineraries and estimate your travel
              budget in seconds with AI powered travel planning.
            </p>
          </header>

          <PlannerPanel
            onTripGenerated={setTrip}
          />
        </div>

        {trip && (
          <ReportViewer trip={trip.trip} />
        )}
      </main>

      <footer>
        <span>
          Travora · Multi Agent Travel Planner
        </span>

        <span className="stack">
          NestJS · LangGraph · Groq · SerpAPI · Google Hotels ·
          Next.js
        </span>
      </footer>
    </>
  );
}