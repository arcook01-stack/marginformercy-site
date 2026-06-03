const LINKS = [
  {
    href: "https://marginformercy.substack.com/",
    label: "Read the weekly note",
    primary: true,
    delay: "d3",
  },
  {
    href: "https://www.instagram.com/marginformercy/",
    label: "Instagram",
    delay: "d4",
  },
  {
    href: "https://www.facebook.com/marginformercy",
    label: "Facebook",
    delay: "d4",
  },
  {
    href: "https://www.youtube.com/@MarginforMercy",
    label: "YouTube",
    delay: "d5",
  },
  {
    href: "https://www.pinterest.com/marginformercy/",
    label: "Pinterest",
    delay: "d5",
  },
];

export default function HomePage() {
  return (
    <main className="w-full max-w-[540px] px-7 pb-14 pt-16 text-center">
      <div className="reveal d1 relative mx-auto mb-[26px] flex h-[108px] w-[108px] items-center justify-center rounded-full bg-rose">
        <div
          className="pointer-events-none absolute inset-[9px] rounded-full border-[1.5px] border-dashed border-cream"
          style={{ opacity: 0.85 }}
        />
        <span className="font-serif text-[56px] font-medium leading-none text-cream">
          M
        </span>
      </div>

      <h1 className="reveal d2 font-serif text-[34px] font-medium leading-[1.05]">
        Margin <em className="font-normal italic text-rose-deep">for mercy</em>
      </h1>
      <p className="reveal d2 mt-2.5 font-serif text-[18px] italic text-rose-deep">
        More room for the people in front of you.
      </p>
      <p className="reveal d3 mx-auto mt-[18px] max-w-[30em] text-base text-muted">
        A weekly note on faith and family, and finding a little room to breathe
        in a full week.
      </p>

      <nav className="mb-[30px] mt-[38px] flex flex-col gap-[13px]">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={
              link.primary
                ? `reveal ${link.delay} flex items-center justify-center gap-2 rounded-[14px] bg-iron px-[22px] py-4 text-[17px] text-cream transition-colors hover:bg-iron-hover`
                : `reveal ${link.delay} flex items-center justify-between rounded-[14px] border border-line bg-cream px-[22px] py-4 text-base text-iron transition-[border-color,transform] duration-200 hover:-translate-y-px hover:border-rose`
            }
          >
            <span>{link.label}</span>
            <span
              className={
                link.primary
                  ? "text-[15px] text-cream"
                  : "text-[15px] text-rose-deep"
              }
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
        ))}
      </nav>

      <p className="reveal d5 text-[15px] text-muted">
        Say hello any time. Message me on{" "}
        <a
          href="https://www.instagram.com/marginformercy/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b text-rose-deep hover:border-rose-deep"
          style={{ borderColor: "rgba(156, 107, 102, 0.4)" }}
        >
          Instagram
        </a>{" "}
        or{" "}
        <a
          href="https://www.facebook.com/marginformercy"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b text-rose-deep hover:border-rose-deep"
          style={{ borderColor: "rgba(156, 107, 102, 0.4)" }}
        >
          Facebook
        </a>
        .
      </p>

      <p className="reveal d5 mt-[46px] text-[13px] tracking-[0.04em] text-foot">
        marginformercy.com
      </p>
    </main>
  );
}
