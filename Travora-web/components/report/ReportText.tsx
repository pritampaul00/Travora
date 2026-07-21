interface Props {
  children: React.ReactNode;
}

export default function ReportText({
  children,
}: Props) {
  return (
    <p className="max-w-[85ch] leading-8">
      {children}
    </p>
  );
}

