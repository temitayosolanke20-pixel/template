import Link from "next/link";

// ─── EDIT footer content ───
const BRAND = "BRAND NAME";

const COLUMNS = [
  {
    heading: "Shop",
    links: [
      { label: "New Arrivals", href: "/collections/new" },
      { label: "Tops", href: "/collections/tops" },
      { label: "Bottoms", href: "/collections/bottoms" },
      { label: "Accessories", href: "/collections/accessories" },
      { label: "Sale", href: "/collections/sale" },
    ],
  },
  {
    heading: "Help",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Shipping & Returns", href: "/shipping" },
      { label: "Size Guide", href: "/size-guide" },
      { label: "Contact Us", href: "/contact" },
      { label: "Track Order", href: "/track" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", icon: "IG" },
  { label: "TikTok", href: "https://tiktok.com", icon: "TK" },
  { label: "Twitter / X", href: "https://x.com", icon: "X" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-black tracking-widest uppercase">
              {BRAND}
            </Link>
            <p className="mt-4 text-xs text-white/40 leading-relaxed">
              Premium streetwear built for those who move differently.
              {/* ─── EDIT your brand tagline ─── */}
            </p>
            <div className="flex gap-4 mt-6">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-xs font-black tracking-widest text-white/40 hover:text-white transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-black tracking-widest uppercase text-white/40 mb-4">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} {BRAND}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-white/30 hover:text-white/60 transition-colors"
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
