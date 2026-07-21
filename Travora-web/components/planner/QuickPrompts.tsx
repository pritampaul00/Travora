interface Props {
  onSelect: (value: string) => void;
}

const prompts = [
  {
    label: "Japan · 7 days",
    value:
      "Plan a complete 7 day Japan trip from Kolkata including flights, hotels and sightseeing under $1500.",
  },
  {
    label: "Dubai · 5 days",
    value:
      "Plan a 5 day Dubai trip from Kolkata with flights, hotels and sightseeing.",
  },
  {
    label: "Thailand · 7 days",
    value:
      "Plan a 7 day Thailand trip from Kolkata with budget hotels and sightseeing.",
  },
  {
    label: "Flights anywhere",
    value:
      "Show me the cheapest international flights from Kolkata.",
  },
];

export default function QuickPrompts({
  onSelect,
}: Props) {
  return (
    <div className="quick-prompts">
      <span className="quick-label">
        Start from
      </span>

      {prompts.map((prompt) => (
        <button
          key={prompt.label}
          type="button"
          onClick={() =>
            onSelect(prompt.value)
          }
        >
          {prompt.label}
        </button>
      ))}
    </div>
  );
}