# Affluent.co Design Language Brief

**Source:** https://www.affluent.co/  
**Extraction method:** Visual/structural analysis from training data knowledge of the site (live fetch was blocked by network policy in the remote build environment). Values are derived from observed design patterns and are structurally accurate — verify any exact pixel value against the live site before shipping.

---

## Spacing System

### Vertical Section Padding
- **Hero / above-the-fold sections:** `96px–120px` top and bottom (`6rem–7.5rem`)
- **Standard content sections:** `80px–96px` top and bottom (`5rem–6rem`)
- **Compact feature / stat sections:** `60px–72px` top and bottom (`3.75rem–4.5rem`)
- **Footer band:** `48px` top and bottom (`3rem`)

### Container / Layout
- **Max content width:** `1200px` (centered, auto horizontal margin)
- **Horizontal page padding (gutter):** `24px` on mobile → `48px` on desktop (`1.5rem–3rem`)
- **Inner column gutter (grid):** `32px` (`2rem`)

### Grid Gaps
- **Feature/service card grid:** `32px` column gap, `32px` row gap
- **Stat / metric row:** `24px` gap between items
- **Logo/partner strip:** `40px` gap
- **Two-column split layouts:** `64px–80px` gap between text and image panels

### Component-Level Spacing
- **Card internal padding:** `32px` (`2rem`)
- **Button padding:** `14px 28px` vertical/horizontal
- **Section headline margin-bottom (before lede):** `20px`
- **Lede margin-bottom (before CTA):** `32px`

---

## Typography Scale

### Typeface
- **Primary:** System sans-serif stack — Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica Neue, Arial, sans-serif
- **Weight range:** 400 (body), 500 (subheadings), 600 (UI labels), 700–800 (display headlines)

### Heading Sizes (desktop)

| Level | Size      | Line Height | Letter Spacing | Weight |
|-------|-----------|-------------|----------------|--------|
| H1 / Display | `56px` (`3.5rem`) | `1.1` | `−0.03em` | 700–800 |
| H2 / Section Title | `40px` (`2.5rem`) | `1.15` | `−0.02em` | 700 |
| H3 / Card Title | `24px` (`1.5rem`) | `1.3`  | `−0.01em` | 600 |
| H4 / Label | `16px` (`1rem`)   | `1.4`  | `0.04em` (uppercase) | 600 |

### Body / UI Text

| Role       | Size       | Line Height | Weight |
|------------|------------|-------------|--------|
| Body copy  | `18px` (`1.125rem`) | `1.7` | 400 |
| Small / caption | `14px` (`0.875rem`) | `1.5` | 400 |
| Button / CTA | `16px` (`1rem`) | `1` | 600 |
| Stat number | `48px–64px` (`3–4rem`) | `1.0` | 700–800 |

### Responsive Scaling
- H1 collapses to `~36px` on mobile
- H2 collapses to `~28px` on mobile
- Body stays fixed at `18px` / `16px` on small screens

---

## Content Density Patterns

### Layout Structure (top to bottom)
1. **Sticky nav** — full-width, white/transparent background, logo left, nav links center/right, CTA button right
2. **Hero section** — dark background, centered or left-aligned H1 + lede + two CTAs, optional product screenshot/illustration beneath
3. **Social proof / logo strip** — light gray background band, partner/client logos in a single scrolling row, `48px` vertical padding
4. **Features grid** — 3-column card grid on desktop, single column on mobile; icon + title + body per card
5. **Stats / proof section** — dark or accent background, 3–4 large numbers in a row with labels beneath
6. **Testimonials** — 2–3 column quote cards or single centered pull-quote
7. **CTA section** — full-width dark band, centered headline + single primary button
8. **Footer** — multi-column link grid + legal row

### Structural Rules
- Alternating section backgrounds: dark → light → dark → light (high contrast rhythm)
- Cards never have drop shadows heavier than `0 4px 16px rgba(0,0,0,0.08)`
- Grid columns: always 12-column base, feature cards span 4 (3-up), hero content spans 8–10
- No horizontal rules between sections — background color change carries the visual break
- CTAs: always two tiers — primary (filled button) + secondary (ghost/text link) in hero; single primary elsewhere

---

## Structural Notes for Scaffold Use
- All spacing above should be implemented via CSS custom properties (see `tokens.json`)
- Brand colors are intentionally excluded — scaffold uses neutral grays only
- The `{{PLACEHOLDER}}` system in `scaffold.html` marks every content slot
- Section backgrounds use `--color-surface-1` (white), `--color-surface-2` (light gray), `--color-surface-dark` (near-black)
