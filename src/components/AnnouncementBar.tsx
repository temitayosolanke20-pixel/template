"use client";

// ─── EDIT THIS ARRAY to change the scrolling announcement messages ───
const ANNOUNCEMENTS = [
  "FREE SHIPPING ON ORDERS OVER $150",
  "★ NEW DROP — LIMITED QUANTITIES",
  "USE CODE WELCOME10 FOR 10% OFF",
  "WORLDWIDE SHIPPING AVAILABLE",
  "★ SEASON 3 COLLECTION — AVAILABLE NOW",
  "FREE RETURNS WITHIN 30 DAYS",
];

export function AnnouncementBar() {
  // Duplicate so the loop is seamless
  const items = [...ANNOUNCEMENTS, ...ANNOUNCEMENTS];

  return (
    <div className="bg-white text-black text-xs font-bold tracking-widest uppercase py-2 overflow-hidden">
      <div className="marquee-track">
        {items.map((text, i) => (
          <span key={i} className="px-8 whitespace-nowrap">
            {text}
            <span className="mx-6 opacity-40">|</span>
          </span>
        ))}
      </div>
    </div>
  );
}
