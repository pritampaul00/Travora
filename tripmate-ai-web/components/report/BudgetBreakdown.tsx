import { BudgetBreakdown as Budget } from "@/types/budget";

import ReportSection from "./ReportSection";
import ReportText from "./ReportText";
import SectionHeading from "./SectionHeading";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

interface Props {
  budget: Budget;
}

export default function BudgetBreakdown({
  budget,
}: Props) {
  const plannedBudget =
    budget.total + budget.remaining;

  const rows = [
    {
      label: "Flights",
      value: `$${budget.flights}`,
    },
    {
      label: "Hotel",
      value: `$${budget.hotel}`,
    },
    {
      label: "Food & Drinks",
      value: `$${budget.food}`,
    },
    {
      label: "Transportation",
      value: `$${budget.transportation}`,
    },
    {
      label: "Activities",
      value: `$${budget.activities}`,
    },
    {
      label: "Miscellaneous",
      value: `$${budget.miscellaneous}`,
    },
    {
      label: "Total Trip Cost",
      value: (
        <span className="font-semibold">
          ${budget.total}
        </span>
      ),
    },
    {
      label: "Remaining Budget",
      value: (
        <span
          className={`font-semibold ${
            budget.remaining > 0
              ? "text-green-700"
              : "text-[var(--paper-text)]"
          }`}
        >
          ${budget.remaining}
        </span>
      ),
    },
  ];

  return (
    <ReportSection>
      <SectionHeading
        number={5}
        title="Budget Breakdown"
      />

      <Table>
        {/* <thead> */}
          <TableHeader
            left="Category"
            right="Cost (USD)"
            leftWidth="260px"
          />
        {/* </thead> */}

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

      {/* Summary */}

      <div
        className="
          grid
          grid-cols-3

          overflow-hidden
          rounded-md

          border
          border-[var(--paper-border)]
        "
      >
        <div
          className="
            border-r
            border-[var(--paper-border)]

            bg-[var(--paper-soft)]

            px-6
            py-6
          "
        >
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
            Planned Budget
          </p>

          <p
            className="
              mt-3
              text-3xl
              font-bold
              text-[var(--paper-text)]
            "
          >
            ${plannedBudget}
          </p>
        </div>

        <div
          className="
            border-r
            border-[var(--paper-border)]

            bg-[var(--paper)]

            px-6
            py-6
          "
        >
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
            Estimated Spend
          </p>

          <p
            className="
              mt-3
              text-3xl
              font-bold
              text-[var(--paper-text)]
            "
          >
            ${budget.total}
          </p>
        </div>

        <div
          className="
            bg-[var(--paper)]

            px-6
            py-6
          "
        >
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
            Remaining
          </p>

          <p
            className={`mt-3 text-3xl font-bold ${
              budget.remaining > 0
                ? "text-green-700"
                : "text-[var(--paper-text)]"
            }`}
          >
            ${budget.remaining}
          </p>
        </div>
      </div>

      {/* Insight */}

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
          Budget Insight
        </h3>

        <ReportText>
          Your estimated expenses amount to{" "}
          <strong>${budget.total}</strong> against a planned budget of{" "}
          <strong>${plannedBudget}</strong>, leaving approximately{" "}
          <strong>${budget.remaining}</strong> available for shopping,
          dining upgrades, or unexpected travel expenses.
        </ReportText>
      </div>
    </ReportSection>
  );
}


