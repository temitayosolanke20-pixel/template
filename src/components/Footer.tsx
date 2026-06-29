import Link from "next/link";

const COLUMNS = [
  {
    heading: "Services",
    links: [
      { label: "Ad Management", href: "#services" },
      { label: "Custom Websites", href: "#marketplace" },
      { label: "Website Templates", href: "#marketplace" },
      { label: "Video Creatives", href: "#marketplace" },
      { label: "Brand Packages", href: "#pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Who We Serve", href: "#who-we-serve" },
      { label: "How It Works", href: "#process" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", abbr: "IG" },
  { label: "TikTok", href: "https://tiktok.com", abbr: "TK" },
  { label: "LinkedIn", href: "https://linkedin.com", abbr: "LI" },
];

function ZPMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
      <defs>
        <linearGradient id="zpFooter" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#7B2FBE" />
        </linearGradient>
      </defs>
      <polyline points="4,8 18,8 4,26 18,26" stroke="url(#zpFooter)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <polyline points="14,20 20,12 26,20" stroke="url(#zpFooter)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M22 8 L22 32 M22 8 L32 8 Q38 8 38 16 Q38 24 32 24 L22 24" stroke="url(#zpFooter)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0D0D1A]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <ZPMark />
              <span className="text-sm font-black tracking-[0.2em] uppercase text-white group-hover:text-purple-400 transition-colors">
                The Zenith Point
              </span>
            </Link>
            <p className="text-sm text-white/35 leading-relaxed max-w-xs mb-6">
              We don&apos;t just market your brand. We rebuild it.
              <br />
              Marketing, websites, and creative — for businesses ready to grow.
            </p>
            <p className="text-[11px] text-white/25 tracking-wider mb-6">
              Baltimore, MD — Serving clients nationwide
            </p>
            <div className="flex gap-5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-xs font-black tracking-widest text-white/30 hover:text-purple-400 transition-colors"
                >
                  {s.abbr}
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="text-[10px] font-black tracking-[0.35em] uppercase text-white/30 mb-5">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} The Zenith Point. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-white/20 hover:text-white/50 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
