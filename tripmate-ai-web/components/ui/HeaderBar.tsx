interface HeaderBarProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export default function HeaderBar({
  left,
  right,
}: HeaderBarProps) {
  return (
    <header className="panel-head">
      <div>{left}</div>

      <div className="flex items-center gap-3">
        {right}
      </div>
    </header>
  );
}