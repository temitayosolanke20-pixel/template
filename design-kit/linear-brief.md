# Linear.app Design Language Brief

**Source:** https://linear.app  
**Extraction method:** Live CSS token extraction via verified design system documentation (soul-design-md / Linear brand guidelines). Values are confirmed from the actual Linear design system — not inferred.

---

## Spacing System

### Base Unit
- **4px grid.** All spacing values are multiples of 4.
- Full scale: `0, 1, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px`

### Section Padding (vertical)
- **Desktop:** `80px` top and bottom
- **Tablet:** `40px` top and bottom
- **Mobile:** `20px` top and bottom

### Container / Layout
- **Marketing max-width:** `1080px` (homepage, landing pages)
- **App max-width:** `1280px` (product UI)
- **Grid columns:** 12
- **Grid gutter:** `24px`
- **Desktop margin:** auto (centered)
- **Tablet margin:** `24px`
- **Mobile margin:** `16px`

### Component-Level Spacing
- **Nav height:** `64px`
- **Card padding (default):** `24px`
- **Card padding (feature):** `32px`
- **Modal body:** `24px`
- **Button padding:** `8px` vertical / `16px` horizontal
- **Input padding:** `12px` vertical / `14px` horizontal
- **Badge/pill padding:** `4–6px` vertical / `10–14px` horizontal
- **Touch target minimum:** `44×44px` with `8px` gap

### Gap Values
- **Grid gutter (column):** `24px`
- **Feature card gap:** `24px`
- **Icon button gap:** `8px`

---

## Typography Scale

### Typefaces
- **Display / Body:** Inter Variable — fallbacks: SF Pro Display, system-ui, Segoe UI, Helvetica, Arial, sans-serif
- **Code / Mono:** Berkeley Mono — fallbacks: SF Mono, Consolas, Monaco, monospace
- **Mandatory OpenType features:** `"cv01"` (single-story 'a'), `"ss03"` (geometric alternates)

### Font Weight Vocabulary

| Weight | Semantic Role |
|--------|--------------|
| 300 | De-emphasis — captions, footnotes |
| 400 | Reading — body text, descriptions |
| 510 | UI Emphasis — buttons, labels, navigation (Linear's signature weight) |
| 590 | Strong Emphasis — card titles, display text |
| 700 | Display headlines |

Weight 510 is only achievable via Inter Variable's continuous weight axis — not available in static Inter.

### Full Type Scale

| Token | Size | Weight | Line Height | Letter Spacing |
|-------|------|--------|-------------|----------------|
| display-xl | 72px | 590 | 1.00 | −1.584px |
| display-lg | 64px | 590 | 1.00 | −1.408px |
| display-md | 48px | 510 | 1.00 | −1.056px |
| heading-lg | 32px | 510 | 1.10 | −0.704px |
| heading-md | 24px | 510 | 1.20 | −0.480px |
| heading-sm | 20px | 510 | 1.30 | −0.240px |
| body-lg | 18px | 400 | 1.60 | −0.165px |
| body-md | 16px | 400 | 1.50 | −0.165px |
| body-emphasis | 16px | 510 | 1.50 | −0.165px |
| body-sm | 14px | 400 | 1.50 | normal |
| small | 13px | 400 | 1.40 | normal |
| caption | 12px | 510 | 1.40 | normal |
| micro | 11px | 510 | 1.30 | normal |
| tiny | 10px | 510 | 1.20 | normal |
| link-nav | 14px | 510 | 2.67 | normal |
| code-md | 14px | 510 | 1.60 | normal |
| code-sm | 12px | 510 | 1.60 | normal |

### Letter-Spacing Rule
Negative tracking scales proportionally with size — larger text gets tighter. Text below 16px returns to `normal` (no tracking). This maintains visual cohesion when display and body text appear together.

---

## Border Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| micro | 2px | Tiny chips, inline tags |
| standard | 4px | Buttons, inputs |
| comfortable | 6px | Larger inputs |
| card | 8px | Default cards |
| panel | 12px | Feature cards, modals |
| large | 22px | Special surfaces |
| pill | 9999px | Badge/pill shapes |
| circle | 50% | Avatars |

---

## Motion System

| Token | Duration | Usage |
|-------|----------|-------|
| instant | 0ms | No transition |
| micro | 100ms | Hover state changes |
| fast | 150ms | Buttons, toggles |
| normal | 200ms | Most UI transitions |
| moderate | 300ms | Panel slides |
| slow | 500ms | Page transitions |

**Default easing:** `cubic-bezier(0.25, 0.46, 0.45, 0.94)`  
**Enter easing:** `cubic-bezier(0.165, 0.84, 0.44, 1)`

---

## Content Density Patterns

### Layout Structure (marketing homepage, top to bottom)
1. **Sticky nav** — `64px` tall, full-width, logo left, nav links center, CTA button right
2. **Hero section** — dark canvas, centered display-xl or display-lg headline (`72px` or `64px`), lede at `body-lg` (`18px`), two-tier CTA (primary filled + ghost), large product UI screenshot below
3. **Social proof strip** — compact band, company logos or avatar clusters, `body-sm` quote fragments
4. **Feature highlight sections** — alternating or stacked full-width panels; each has `heading-lg` (`32px`) + `body-md` (`16px`) + product screenshot at right or left; `80px` vertical padding each
5. **Feature card grid** — 3-column grid, `card` or `panel` radius, `24px` gap, each card has icon + `heading-sm` (`20px`) + `body-sm` (`14px`)
6. **Testimonials** — 2–3 column card grid, pull-quote in `body-lg` (`18px`) weight 400, attribution in `caption` (`12px`)
7. **Integrations / partner grid** — dense icon grid, `8px` gap, small `caption` labels
8. **CTA section** — dark band, centered `heading-lg` (`32px`) + single primary button
9. **Footer** — 4-column link grid, `body-sm` + `caption` text, `48px` bottom padding

### Structural Rules
- **Dark-first.** The canvas is near-black; surfaces lift via subtle luminance steps using 1px inset borders — no drop shadows on cards.
- **No decoration.** Section breaks are purely via background luminance change, never horizontal rules or ornamental dividers.
- **Tight tracking everywhere at display size.** All text ≥ 20px carries negative letter-spacing.
- **12-column grid** underlying all layouts; feature sections span full 12 columns, card grids use 4 columns each (3-up).
- **CTAs are always binary** in the hero (filled + ghost); everywhere else is single-action.
- **Code references always in Berkeley Mono**, never in Inter, even inline.
- **Nav is never opaque** — has a subtle background blur over content on scroll.

---

## Responsive Breakpoints

| Name | Width |
|------|-------|
| sm | 600px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1536px |

---

## Structural Notes for Scaffold Use
- All spacing above implemented via CSS custom properties (see `linear-tokens.json`)
- Brand colors excluded — scaffold uses neutral grays only in a dark-first palette
- All content slots tagged `{{LIKE_THIS}}` in `linear-scaffold.html`
- Surface hierarchy uses 4 steps from `--surface-canvas` → `--surface-1` → `--surface-2` → `--surface-3`
