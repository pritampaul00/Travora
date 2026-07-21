interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function ReportSection({
  children,
  className = "",
}: Props) {
  return (
    <section
      className={`
        space-y-8
        border-b
        border-dashed
        border-[var(--paper-divider)]

        pb-12

        last:border-b-0
        last:pb-0

        ${className}
      `}
    >
      {children}
    </section>
  );
}