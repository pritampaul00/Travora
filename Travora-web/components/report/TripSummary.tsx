import { ReactNode } from "react";

import { TripSummary as Summary } from "@/types";
import { BudgetBreakdown } from "@/types/budget";

import ReportSection from "./ReportSection";
import SectionHeading from "./SectionHeading";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import ReportText from "./ReportText";

interface Props {
  summary: Summary;
  budgetBreakdown: BudgetBreakdown;
}

interface Row {
  label: string;
  value: ReactNode;
}

export default function TripSummary({
  summary,
  budgetBreakdown,
}: Props) {
  const rows: Row[] = [
    {
      label: "Destination",
      value: summary.destination,
    },
    {
      label: "Travel dates",
      value: summary.travelDates,
    },
    {
      label: "Departure city",
      value: summary.origin,
    },
    {
      label: "Budget",
      value: `$${summary.estimatedBudget}`,
    },
    {
      label: "Duration",
      value: `${summary.totalDays} Days`,
    },
    {
      label: "Travelers",
      value: summary.travelers,
    },
    {
      label: "Travel style",
      value: summary.travelStyle,
    },
    {
      label: "Estimated trip cost",
      value: (
        <strong>
          ${budgetBreakdown.total}
        </strong>
      ),
    },
    {
      label: "Remaining budget",
      value: (
        <span
          className={
            budgetBreakdown.remaining > 0
              ? "font-semibold text-green-700"
              : "font-semibold text-[var(--paper-text)]"
          }
        >
          ${budgetBreakdown.remaining}
        </span>
      ),
    },
  ];

  return (
    <ReportSection>
      <SectionHeading
        number={1}
        title="Trip Summary"
      />

      <Table>
        <TableHeader
          left="Item"
          right="Details"
          leftWidth="220px"
        />

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

      <div className="space-y-4">
        <ReportText>
          This itinerary is planned for a budget of{" "}
          <strong>${summary.estimatedBudget}</strong> over{" "}
          <strong>{summary.totalDays} days</strong>. The estimated travel cost
          is <strong>${budgetBreakdown.total}</strong>, leaving approximately{" "}
          <strong>${budgetBreakdown.remaining}</strong> available for shopping,
          upgrades or unexpected expenses.
        </ReportText>

        <ReportText>
          The recommendations in this report are tailored to your selected
          travel style, expected duration and budget while maintaining a
          balanced mix of accommodation, transportation and sightseeing.
        </ReportText>
      </div>
    </ReportSection>
  );
}