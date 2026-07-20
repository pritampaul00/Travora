import { Flight } from "@/types";

interface Props {
  flight: Flight;
}

export default function FlightTimeline({
  flight,
}: Props) {
  const duration = `${Math.floor(flight.duration / 60)}h ${
    flight.duration % 60
  }m`;

  return (
    <div
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
              text-[11px]
              uppercase
              tracking-[0.22em]
              text-[var(--paper-muted)]
            "
          >
            Airline
          </p>

          <h3
            className="
              mt-1
              text-2xl
              font-semibold
              text-[var(--paper-text)]
            "
          >
            {flight.airline}
          </h3>

          <p
            className="
              mt-1
              text-sm
              text-[var(--paper-muted)]
            "
          >
            Flight {flight.flightNumber}
          </p>
        </div>

        <div className="text-right">
          <p
            className="
              font-mono
              text-[11px]
              uppercase
              tracking-[0.22em]
              text-[var(--paper-muted)]
            "
          >
            Cabin
          </p>

          <p
            className="
              mt-1
              text-lg
              font-semibold
              text-[var(--paper-text)]
            "
          >
            {flight.travelClass}
          </p>
        </div>
      </div>

      {/* Route */}

      <div className="px-10 py-10">
        <div className="grid grid-cols-[150px_1fr_150px] items-center gap-8">
          {/* Departure */}

          <div>
            <div
              className="
                text-[40px]
                font-bold
                tracking-tight
                text-[var(--paper-text)]
              "
            >
              {flight.departure}
            </div>

            <div
              className="
                mt-2
                text-lg
                text-[var(--paper-muted)]
              "
            >
              {flight.departureTime}
            </div>
          </div>

          {/* Timeline */}

          <div>
            <div
              className="
                mb-4
                text-center

                font-mono
                text-[11px]
                uppercase
                tracking-[0.22em]

                text-[var(--paper-muted)]
              "
            >
              {duration}
            </div>

            <div className="relative flex items-center">
              <div className="h-px flex-1 bg-[var(--paper-border)]" />

              <div
                className="
                  absolute
                  left-0

                  h-3
                  w-3

                  rounded-full

                  border
                  border-[var(--paper-border)]

                  bg-[var(--paper)]
                "
              />

              <div
                className="
                  absolute
                  right-0

                  h-3
                  w-3

                  rounded-full

                  border
                  border-[var(--paper-border)]

                  bg-[var(--paper)]
                "
              />

              <div
                className="
                  absolute
                  left-1/2

                  -translate-x-1/2

                  bg-[var(--paper)]

                  px-4

                  text-xl
                  text-[var(--sun)]
                "
              >
                →
              </div>
            </div>

            <div
              className="
                mt-4
                text-center
                text-sm
                text-[var(--paper-muted)]
              "
            >
              Non-stop Flight
            </div>
          </div>

          {/* Arrival */}

          <div className="text-right">
            <div
              className="
                text-[40px]
                font-bold
                tracking-tight
                text-[var(--paper-text)]
              "
            >
              {flight.arrival}
            </div>

            <div
              className="
                mt-2
                text-lg
                text-[var(--paper-muted)]
              "
            >
              {flight.arrivalTime}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className="grid grid-cols-3 border-t border-[var(--paper-border)]">
        <div
          className="
            border-r
            border-[var(--paper-border)]

            px-6
            py-5
          "
        >
          <p
            className="
              font-mono
              text-[11px]
              uppercase
              tracking-[0.22em]
              text-[var(--paper-muted)]
            "
          >
            Estimated Fare
          </p>

          <p
            className="
              mt-2
              text-3xl
              font-bold
              text-[var(--paper-text)]
            "
          >
            {flight.price}
          </p>
        </div>

        <div
          className="
            border-r
            border-[var(--paper-border)]

            px-6
            py-5
          "
        >
          <p
            className="
              font-mono
              text-[11px]
              uppercase
              tracking-[0.22em]
              text-[var(--paper-muted)]
            "
          >
            Duration
          </p>

          <p
            className="
              mt-2
              text-xl
              font-semibold
              text-[var(--paper-text)]
            "
          >
            {duration}
          </p>
        </div>

        <div className="flex items-center justify-center px-6 py-5">
          <span
            className="
              rounded-md
              bg-[var(--sun)]

              px-4
              py-2

              text-sm
              font-semibold

              text-white
            "
          >
            Recommended
          </span>
        </div>
      </div>
    </div>
  );
}

