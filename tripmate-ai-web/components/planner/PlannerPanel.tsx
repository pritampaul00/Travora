"use client";

import { useState } from "react";

import { planTrip } from "@/services/travel.service";
import { TravelResponse } from "@/types";

import PlannerHeader from "./PlannerHeader";
import PlannerInput from "./PlannerInput";
import PlannerSidebar from "./PlannerSidebar";

interface PlannerPanelProps {
  onTripGenerated: (trip: TravelResponse) => void;
}

export default function PlannerPanel({
  onTripGenerated,
}: PlannerPanelProps) {
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!message.trim()) return;

    try {
      setLoading(true);

      const response = await planTrip({
        message,
      });

      console.log("Travel response:", response);

      onTripGenerated(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="panel planner">
      <PlannerHeader />

      <div className="panel-body">
        <PlannerInput
          message={message}
          loading={loading}
          onChange={setMessage}
          onSubmit={handleSubmit}
        />

        <PlannerSidebar />
      </div>
    </section>
  );
}