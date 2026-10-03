# Design 3 — Mid-Century Palm Springs Retro

## (a) Visual direction

A playful, confident take on Palm Springs' iconic mid-century modern look.

- **Palette:** sunset orange, turquoise/pool blue, mustard, and flamingo pink
  over warm cream paper. High contrast, sunny, unmistakably desert.
- **Typography:** bold geometric display type (Futura / Century Gothic family)
  in all-caps for headlines, clean sans for body.
- **Shapes & texture:** hard black outlines, offset "block" shadows, pill
  buttons, a CSS **breeze-block** pattern and a retro **sunburst** circle in the
  hero — all drawn in CSS, no image files.
- **Tone:** characterful and fun but still professional; distinct from the
  terracotta-editorial and stark-minimalist directions.

Everything emphasizes the two anchors: **vegan private chef** and **Palm
Springs / Coachella Valley**.

Files: `index.html` (home), `about.html`, `blog.html`, `recipes.html`,
`recipe.html` (single recipe), `contact.html`, shared `styles.css`. Plain
HTML/CSS, opens directly in a browser; one tiny vanilla-JS mobile menu toggle.

## (b) How Blog & Recipes map to Squarespace-native tools

Both features are standard Squarespace **Blog Collections** — no code, no
plugins. Tracy manages everything from the normal editor.

### Blog
Use a built-in **Blog Collection** (the layout here mirrors one). To add a post
she clicks **+ > Blog Post**, types a title and body, drops in a photo, picks a
category (Seasonal, Entertaining, Philosophy), and hits **Publish** or
schedules it. The listing page updates itself.

### Recipes — recommended: a *second Blog Collection named "Recipes"*
Squarespace lets you add more than one blog. Create a second Blog Collection
titled **Recipes** with its own page/URL. It behaves exactly like the blog, so
the "listing + single page" pattern shown here comes for free, and it supports
categories/tags (e.g. *Mains*, *Salads*, *Gluten-Free*) for filtering.

To add a recipe she clicks **+ > Blog Post** inside the Recipes collection and
fills the post body using normal editor blocks:

- a **Text block** for the intro,
- an **Image block** for the hero photo,
- **Text blocks** (or a two-column section) for Ingredients and Method,
- optional tags for the category pills.

For the prep/cook/serves stats, the simplest no-code option is to type them at
the top of the post body. If she later wants nicer structured recipe cards,
Squarespace's **Stores/structured blocks** or a recipe-card extension can be
added, but that is optional — the second-blog approach needs zero extra tools
and keeps her entirely at Squarespace-editor level.

The contact form maps to a native **Form Block** (set to email submissions to
`tracy@tracynoelle.com`); the HTML `mailto` form here is just the static stand-in.
