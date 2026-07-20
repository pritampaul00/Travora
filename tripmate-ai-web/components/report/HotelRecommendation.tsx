import Image from "next/image";

import { Hotel } from "@/types";

import ReportSection from "./ReportSection";
import ReportText from "./ReportText";
import SectionHeading from "./SectionHeading";
import Table from "./Table";
import TableRow from "./TableRow";

interface Props {
  hotel: Hotel | null;
  reason: string;
  tips: string[];
}

export default function HotelRecommendation({
  hotel,
  reason,
  tips,
}: Props) {
  if (!hotel) return null;

  const rows = [
    {
      label: "Hotel",
      value: hotel.name,
    },
    {
      label: "Rating",
      value: hotel.rating ?? "N/A",
    },
    {
      label: "Reviews",
      value: hotel.reviews ?? "N/A",
    },
    {
      label: "Price",
      value: (
        <span className="font-semibold">
          {hotel.price ?? "N/A"}
        </span>
      ),
    },
    {
      label: "Address",
      value: hotel.address || "Not available",
    },
    {
      label: "Property Type",
      value: hotel.description,
    },
  ];

  if (hotel.website) {
    rows.push({
      label: "Website",
      value: (
        <a
          href={hotel.website}
          target="_blank"
          rel="noopener noreferrer"
          className="
            font-medium
            text-[var(--accent)]
            underline
            underline-offset-2
          "
        >
          Visit Official Website
        </a>
      ),
    });
  }

  return (
    <ReportSection>
      <SectionHeading
        number={3}
        title="Hotel Recommendation"
      />

      <div className="grid grid-cols-[260px_1fr] gap-8">
        {/* Hotel Image */}

        <div
          className="
            overflow-hidden
            rounded-md
            border
            border-[var(--paper-border)]
            bg-[var(--paper-soft)]
          "
        >
          <div className="relative aspect-[4/3]">
            {hotel.thumbnail ? (
              <Image
                src={hotel.thumbnail}
                alt={hotel.name}
                fill
                className="object-cover"
                unoptimized
              />
            ) : (
              <div
                className="
                  flex
                  h-full
                  items-center
                  justify-center
                  text-[var(--paper-muted)]
                "
              >
                No Image Available
              </div>
            )}
          </div>
        </div>

        {/* Details */}

        <Table>
          <tbody>
            {rows.map((row) => (
              <TableRow
                key={row.label}
                label={row.label}
                value={row.value}
              />
            ))}
          </tbody>
        </Table>
      </div>

      {reason && (
        <div className="space-y-3">
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
            Why this hotel?
          </h3>

          <ReportText>
            {reason}
          </ReportText>
        </div>
      )}

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


