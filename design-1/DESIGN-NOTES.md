# Design 1 — "Warm Desert Editorial"

## (a) Visual direction

An upscale lifestyle-magazine feel built on a warm Palm Springs desert palette:
terracotta and warm clay as the lead accents, soft sand/cream backgrounds, and a
sage-green secondary accent. Headings use an elegant serif (Cormorant Garamond,
with Georgia as a system fallback) against a clean sans-serif body (Inter), with
generous whitespace and large image placeholders for food and portraits. The
tone is editorial and unhurried — closer to a food-and-travel magazine than a
restaurant site — and deliberately distinct from stark-minimal or mid-century-retro
treatments. Every page reinforces the two anchors: **vegan private chef** and the
**Palm Springs / Coachella Valley** area.

Files: `index.html` (Home), `about.html`, `blog.html` (Journal listing),
`recipes.html` (listing) + `recipe.html` (single recipe), `contact.html`,
`style.css`. No build step, no frameworks; one tiny inline script toggles the
mobile menu. Images use placehold.co URLs, so nothing local is required.

## (b) How Blog & Recipes map to Squarespace-native tools

Both features are plain **Squarespace Blog Collections**, which is the one
content type the editor is built around — so Tracy manages everything herself,
no code.

**Journal (Blog)** — Add a *Blog* page from the Pages panel. Each entry is a
standard blog post: she clicks **+ New Post**, types a title and body, drops in a
photo, sets the thumbnail, and publishes (or schedules). The listing layout,
thumbnails, dates, and excerpts are all native blog features — the mockup's
`blog.html` card grid mirrors the "grid" blog layout Squarespace offers out of
the box.

**Recipes** — Use a **second, separate Blog Collection named "Recipes."** A blog
collection is the right native tool because it gives her the same familiar
post editor, its own URL (`/recipes`), tags/categories (e.g. "Salad", "Mains",
"Sweets"), and a built-in listing-plus-detail structure — exactly what the
mockup's `recipes.html` + `recipe.html` show. To add a recipe she clicks
**+ New Post** in the Recipes collection and writes it like any post:

- **Title** = recipe name
- **Thumbnail** = the finished-dish photo (shown on the recipe card)
- **Categories** = course/tags for filtering
- **Body** = intro, then two Text blocks for *Ingredients* and *Method*, with an
  Image block up top. Prep/cook/serves can live in a short Text block or a
  simple two-column layout using Squarespace's drag-to-arrange blocks.

Optional upgrade: Squarespace's **Summary Block** can pull recent posts from
either collection onto the Home page automatically, so new journal entries and
recipes surface on the homepage with zero extra work.

No plugins, no custom code — just two Blog Collections and the normal editor.
