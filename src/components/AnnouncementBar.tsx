"use client";

const ANNOUNCEMENTS = [
  "RESULTS-DRIVEN AD MANAGEMENT — BUILT FOR SERVICE BUSINESSES",
  "★ CUSTOM WEBSITES THAT CONVERT — NOT JUST LOOK GOOD",
  "VIDEO CREATIVE PACKAGES STARTING AT $300",
  "BALTIMORE, MD — SERVING CLIENTS NATIONWIDE",
  "★ ONE NEW CUSTOMER CAN CHANGE EVERYTHING — WE HELP YOU GET THERE",
  "LEAD GUARANTEES AVAILABLE — ASK ABOUT OUR PERFORMANCE MODEL",
];

export function AnnouncementBar() {
  const items = [...ANNOUNCEMENTS, ...ANNOUNCEMENTS];
  return (
    <div
      className="bg-[#7B2FBE] text-white text-[10px] font-bold tracking-[0.25em] uppercase py-2 overflow-hidden"
      style={{ "--announcement-height": "32px" } as React.CSSProperties}
    >
      <div className="marquee-track">
        {items.map((text, i) => (
          <span key={i} className="px-8 whitespace-nowrap">
            {text}
            <span className="mx-6 opacity-50">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
