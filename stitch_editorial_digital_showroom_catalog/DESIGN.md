---
name: Architectural Atelier
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#4d4540'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#7e7570'
  outline-variant: '#d0c4be'
  surface-tint: '#625d5b'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1e1b19'
  on-primary-container: '#888380'
  inverse-primary: '#ccc5c1'
  secondary: '#725b38'
  on-secondary: '#ffffff'
  secondary-container: '#fedeb2'
  on-secondary-container: '#78603e'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#3b0900'
  on-tertiary-container: '#c26d55'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e9e1dd'
  primary-fixed-dim: '#ccc5c1'
  on-primary-fixed: '#1e1b19'
  on-primary-fixed-variant: '#4a4643'
  secondary-fixed: '#fedeb2'
  secondary-fixed-dim: '#e0c298'
  on-secondary-fixed: '#281800'
  on-secondary-fixed-variant: '#584323'
  tertiary-fixed: '#ffdbd1'
  tertiary-fixed-dim: '#ffb5a1'
  on-tertiary-fixed: '#3b0900'
  on-tertiary-fixed-variant: '#76321f'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 84px
    fontWeight: '400'
    lineHeight: 92px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 44px
    fontWeight: '400'
    lineHeight: 50px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 34px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 38px
    fontWeight: '400'
    lineHeight: 46px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 26px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '300'
    lineHeight: 30px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.18em
  label-meta:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.5rem
  margin-desktop: 5rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.5rem
  space-lg: 3rem
  space-xl: 5rem
---

## Brand & Style
This design system curates an elevated digital gallery environment tailored for haute couture apparel, bespoke objects, and sculptural interior design. The aesthetic direction blends tactile minimalism with high-end architectural editorial design. The experience evokes the serenity of a private salon in Paris or a brutalist travertine pavilion in Milan: calm, authoritative, sensory, and deliberate.

Interfaces treat negative space as a physical material. Visual compositions favor editorial pacing, deliberate asymmetry, expansive viewports, and sculptural framing over dense utility. Interactions should feel weighted and deliberate, mirroring the tactile resistance of heavy linen paper, brushed metal hardware, and hand-cut stone.

## Colors
The palette derives from raw architectural finishes and natural pigments:

- **Primary (`#1A1715`)**: Deep espresso charcoal. Used for definitive typography, authoritative outlines, key interactive targets, and grounding structural frames.
- **Secondary (`#C5A880`)**: Muted champagne gold. Reserved for delicate rules, understated selection accents, curated metadata, and secondary interactive moments.
- **Tertiary (`#A85842`)**: Sun-baked terracotta. Employed sparingly for focal callouts, seasonal curation tags, alert accents, and active spatial indicators.
- **Neutral (`#F7F5F0`)**: Unpolished travertine alabaster. The tactile canvas foundation that softens interface contrast and eliminates sterile digital whites.

Surface layering utilizes warm undertones (`#EDE8DE` for inset gallery panels, `#FAF9F6` for elevated sheet surfaces). Border dividers maintain a subtle gossamer finish using espresso charcoal at 8% to 14% opacity.

## Typography
Typographic scale reflects the contrast of an archival monograph. 

- **Display & Headlines**: Rendered in `Playfair Display` at light-to-medium weights with tight negative tracking, conveying haute couture heritage and architectural presence.
- **Body & Captions**: Cast in `Plus Jakarta Sans` with airy line heights to ensure legible, effortless scanning against warm neutral backdrops.
- **Labels & Overlines**: Use `label-caps` set strictly in uppercase with wide tracking (`0.18em`) to act as refined curatorial signage for materials, specs, numbers, and categories.

## Layout & Spacing
The layout model employs an asymmetric 12-column editorial grid designed to break rigid corporate uniformity.

- **Desktop (1280px+)**: 12 columns with `2.5rem` gutters and generous `5rem` outer margins. Content blocks oscillate between full 12-column atmospheric spans, offset 7-column feature compositions, and 4-column contemplative narrative blocks.
- **Tablet (768px - 1279px)**: 8 columns with `2rem` gutters and `3rem` margins. Asymmetric pairings condense into alternating two-column layouts.
- **Mobile (<768px)**: 4 columns with `1.5rem` gutters and `1.5rem` margins. Spacing transitions to vertical stacking while preserving editorial contrast through generous row margins (`space-lg` and `space-xl` between sections).
- **Rhythm**: Editorial margins breathe without aggressive density; negative space serves as an intentional framing device around apparel photography and product vignettes.

## Elevation & Depth
Depth is rendered through physical material stacking, low-contrast hairline borders, and warm ambient light rather than artificial drop shadows:

- **Tonal Tiers**: Layering relies on subtle value shifts across surfaces: Base Canvas (`#F7F5F0`) → Inset Wells (`#EDE8DE`) → Raised Plinths (`#FAF9F6`).
- **Low-Contrast Outlines**: Cards and architectural dividers use ultra-fine 1px borders colored in espresso charcoal at 10% opacity (`rgba(26, 23, 21, 0.1)`), or champagne gold at 30% opacity (`rgba(197, 168, 128, 0.3)`).
- **Ambient Diffuse Shadows**: Reserved exclusively for floating sheets, drawers, and modal quick-views. Use an expansive, warm, low-opacity spread: `box-shadow: 0 24px 48px -12px rgba(26, 23, 21, 0.07), 0 4px 12px 0 rgba(26, 23, 21, 0.03)`.
- **Glass Elements**: Floating navigation bars and translucent overlays utilize subtle frosted travertine glass: `background: rgba(247, 245, 240, 0.85); backdrop-filter: blur(16px);`.

## Shapes
Geometry is strictly architectural and pure. The system adopts a `0` (Sharp) roundedness strategy (`0px` corner radius) across standard UI elements: cards, imagery containers, buttons, dialogs, and form inputs.

Sharp corners honor the heritage of atelier pattern-cutting, architectural blue-prints, and physical paper lookbooks. Subtle softening is reserved solely for anatomical interactive markers (e.g., circular color swatches, organic slider thumbs, and radial icon buttons).

## Components

### Buttons & Interactive CTAs
- **Primary Action**: Crisp rectangular blocks in espresso charcoal (`#1A1715`) with crisp alabaster text (`#F7F5F0`), styled in `label-caps`. Hover states smoothly invert to warm champagne gold (`#C5A880`) or trigger a subtle background fade with no displacement.
- **Secondary / Ghost**: Unfilled frames with a 1px border (`rgba(26, 23, 21, 0.2)`). Hover shifts border and text to espresso charcoal (`#1A1715`).
- **Text Link CTA**: Serif or caps label anchored by a persistent 1px baseline underline offset by `4px`, which expands smoothly from 0% to 100% width on hover.

### Chips & Filter Tags
- Rendered as minimal rectangular tags with `1px` borders.
- **Default**: Unfilled, text in `#1A1715` at 70% opacity, border in `rgba(26, 23, 21, 0.12)`.
- **Selected**: Solid `#1A1715` fill with neutral light text, or an understated travertine fill (`#EDE8DE`) with tertiary terracotta accent indicator (`#A85842`).

### Cards & Lookbook Tiles
- Void of standard card boxes; product tiles function as borderless photographic plinths.
- Media uses cinematic crop ratios (3:4 portrait or 16:10 landscape) with seamless zoom transitions (1.02x scale over 600ms ease-out).
- Metadata is placed cleanly underneath using asymmetric typographic hierarchy: item title in `Playfair Display` medium, price and material provenance in `label-meta`.

### Inputs & Selection Controls
- **Input Fields**: Single hairline bottom border (`1px solid rgba(26, 23, 21, 0.2)`), zero background fill, and minimal padding (`space-sm 0`). Active focus transitions the bottom border to `#1A1715` with a smooth 200ms transition. Placeholder text sits in light italic serif or muted sans-serif.
- **Checkboxes & Radios**: Geometric square boxes (for checkboxes) and refined circles (for radios) with 1px dark frames. Active states feature an interior solid geometric fill inset by 3px of negative whitespace.

### Catalog Specifics (Micro-Interactions)
- **Material Swatches**: Circular 20px tactile discs displaying fabric/stone textures, framed by a delicate 1px outer ring when active with 2px offset.
- **Quick Look Drawer**: Glides smoothly from the right edge with a sharp-edged, stone-toned panel (`#FAF9F6`) accompanied by a diffused backdrop wash.
- **Curatorial Sticky Bar**: Floating minimal navigation capsule fixed at viewport bottom or top, featuring blurred alabaster material and hairline gold border.