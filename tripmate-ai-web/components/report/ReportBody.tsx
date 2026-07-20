interface Props {
  children: React.ReactNode;
}

export default function ReportBody({
  children,
}: Props) {
  return (
    <main
      className="
        py-10
        lg:py-14

        flex
        justify-center
      "
    >
      {children}
    </main>
  );
}

