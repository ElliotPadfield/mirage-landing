# Mirage landing page design QA

## Visual truth

- Selected source: `/Users/elliotpadfield/.codex/generated_images/019f9b2c-4641-7783-ba64-768fa227e8db/call_0pnmm4MhuRVWftPMG4DwR5iN.png`
- Final implementation capture: `/Users/elliotpadfield/.codex/visualizations/2026/07/25/019f9b2c-4641-7783-ba64-768fa227e8db/mirage-landing-build/28-final-desktop-evidence-1672x941.png`
- Combined comparison: `/Users/elliotpadfield/.codex/visualizations/2026/07/25/019f9b2c-4641-7783-ba64-768fa227e8db/mirage-landing-build/31-final-comparison.png`
- Source viewport: 1672 × 941 CSS px at 1× density.
- Implementation viewport: requested at 1672 × 941 CSS px; browser capture is 1657 × 933 after viewport chrome and scrollbar allocation. The source was normalized to 1657 × 933 for the combined comparison.
- Desktop state: hero at page top with Malibu selected in the real Mirage interface.
- Mobile state: 390 × 844 CSS px, captured at `/Users/elliotpadfield/.codex/visualizations/2026/07/25/019f9b2c-4641-7783-ba64-768fa227e8db/mirage-landing-build/29-final-mobile-evidence-390x844.png`.

The normalized comparison keeps the headline, hero product frame, primary CTA, open-source link, and three-step section readable at once. A separate crop was not required. The product frame uses the real Mirage app screenshot rather than a reconstructed asset.

## Comparison history

1. The first implementation wrapped the hero headline over three lines and reduced its visual impact. It was corrected with an explicit two-line hero structure and adjusted grid sizing.
2. The first “How it works” treatment was too tall and editorial. It was rebuilt as the compact three-step strip shown in the source.
3. The first mobile pass overflowed horizontally by 37 px because the desktop hero line could not wrap. The mobile rule now allows wrapping; final measured body width and scroll width are both 375 px inside the 390 px viewport.
4. The first CTA was undersized and the open-source link sat beside it. The CTA now carries the source’s visual weight and the link stacks underneath.

## Final findings

- P0: none.
- P1: none.
- P2: none.
- P3: the implementation uses Plus Jakarta Sans italic for “anywhere.” instead of the source mock’s serif treatment. This preserves the established Mirage display type system.
- P3: the real app screenshot keeps its native 3:2 frame, making it slightly taller than the generated mock’s illustrative product crop. The image is not stretched or reconstructed.
- P3: the implementation includes a small product eyebrow and a Product navigation item for clearer product context.

## Functional and technical verification

- Production build: passed with `pnpm build`.
- Diff validation: passed with `git diff --check`.
- Desktop and mobile browser consoles: no errors.
- Header “How it works” link: scrolls to `#how-it-works`.
- Header “Product” link: scrolls to `#product`.
- Download actions: point to `https://github.com/ElliotPadfield/mirage/releases/latest`.
- Mobile layout: no horizontal overflow at 390 × 844.
- All visible product imagery comes from the Mirage product repository.
- Interface icons use `@phosphor-icons/react`.

final result: passed
