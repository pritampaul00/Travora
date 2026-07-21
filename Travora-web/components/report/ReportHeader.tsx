import HeaderBar from "../ui/HeaderBar";
interface ReportHeaderProps {
  onCopy: () => void;
  onDownload: () => void;
  copyLabel: string;
  downloading: boolean;
}

export default function ReportHeader({
  onCopy,
  onDownload,
  copyLabel,
  downloading,
}: ReportHeaderProps) {
  return (
    <HeaderBar
      left={
        <span className="panel-label">
          YOUR ITINERARY
        </span>
      }
      right={
        <>
          <button
            onClick={onCopy}
            className="
              inline-flex
              h-[42px]
              min-w-[92px]
              items-center
              justify-center
              rounded-xl
              border
              border-[var(--ink-line)]
              bg-transparent
              px-5

              font-mono
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.14em]

              transition-colors
              hover:bg-black/5
            "
          >
            {copyLabel}
          </button>

          <button
            onClick={onDownload}
            disabled={downloading}
            className="
              inline-flex
              h-[42px]
              min-w-[180px]
              items-center
              justify-center
              rounded-xl

              bg-[var(--sea)]
              px-6

              font-mono
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.14em]

              text-[#06231f]

              transition-colors
              hover:bg-[#2f857a]

              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {downloading ? "Generating..." : "DOWNLOAD PDF"}
          </button>
        </>
      }
    />
  );
}