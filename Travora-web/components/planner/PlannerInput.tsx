"use client";

import { KeyboardEvent } from "react";

import QuickPrompts from "./QuickPrompts";

interface Props {
  message: string;
  loading: boolean;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export default function PlannerInput({
  message,
  loading,
  onChange,
  onSubmit,
}: Props) {
  function handleKeyDown(
    event: KeyboardEvent<HTMLTextAreaElement>,
  ) {
    if (
      (event.metaKey || event.ctrlKey) &&
      event.key === "Enter"
    ) {
      event.preventDefault();
      onSubmit();
    }
  }

  return (
    <div className="panel-main">
      <h2>Tell us about the trip</h2>

      <p className="hint">
        Try: &ldquo;Plan a 7 day Japan trip from Kolkata, with
        flights, hotels and sightseeing, under $1500.&rdquo;
      </p>

      <div className="input-area">
        <textarea
          value={message}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="A 7 day Japan trip. Flights, hotels and sightseeing under $1500..."
        />

        <div className="input-row">
          <button
            id="sendBtn"
            onClick={onSubmit}
            disabled={loading}
          >
            {loading ? (
              <>
                <span>Building...</span>
                <span className="loader" />
              </>
            ) : (
              "Build the itinerary"
            )}
          </button>

          <span className="kbd-hint">
            ⌘ / Ctrl + Enter
          </span>
        </div>
      </div>

      <QuickPrompts onSelect={onChange} />
    </div>
  );
}