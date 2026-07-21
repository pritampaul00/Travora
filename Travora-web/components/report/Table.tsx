interface Props {
  children: React.ReactNode;
}

export default function ReportTable({ children }: Props) {
  return (
    <div
      className="
        mt-7
        rounded-md
        overflow-hidden
        border
        border-[var(--paper-border)]
        shadow-sm
      "
    >
      <table className="w-full table-fixed border-collapse">
        {children}
      </table>
    </div>
  );
}