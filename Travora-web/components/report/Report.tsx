interface Props {
  children: React.ReactNode;
}

export default function Report({ children }: Props) {
  return (
    <div className="mt-12 flex justify-center px-5">
      <article
        className="
          w-full
          max-w-[960px]
          overflow-hidden

          rounded-[20px]

          border
          border-[var(--paper-border)]

          bg-[var(--paper)]

          text-[var(--paper-text)]

          shadow-[0_18px_48px_rgba(0,0,0,0.16)]
        "
      >
        {children}
      </article>
    </div>
  );
}