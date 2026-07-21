interface Props {
  number: number;
  title: string;
}

export default function SectionHeading({
  number,
  title,
}: Props) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-8">
        <div className="h-9 w-[3px] rounded-full bg-[var(--sun)]" />

        <h2
          className="
            font-display
            text-[20px]
            font-semibold
            leading-none
            tracking-[-0.02em]
            text-[var(--paper-text)]
          "
        >
          {number}. {title}
        </h2>
      </div>
    </div>
  );
}


