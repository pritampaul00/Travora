interface Props {
  children: React.ReactNode;
}

export default function ReportContent({
  children,
}: Props) {
  return (
    <div
  className="
    w-[90%]
    max-w-[1080px]
    mx-auto

    flex
    flex-col
    gap-16
  "
    >
      {children}
    </div>
  );
}