# Design 2 — Clean Minimalist / Fine Dining

## (a) Visual direction

Quiet luxury, gallery-like. A near-monochrome neutral palette — off-white
(`#f7f5f1`), charcoal ink (`#26241f`), and a single restrained warm-taupe
accent (`#8a7a5c`). Type pairs an elegant serif (Cormorant Garamond) for
headings with a light sans (Inter) for body and uppercase, wide-tracked labels.
Generous negative space, hairline rules, slim outlined buttons, and lightly
desaturated imagery give it the feel of a high-end restaurant site. Deliberately
distinct from a warm-terracotta editorial or a bold retro mid-century look.

Throughout, the copy emphasizes **vegan / plant-based private chef** and the
**Palm Springs / Coachella Valley** area.

## (b) Blog & Recipes on Squarespace (no code, editor-level)

This mockup is five static HTML pages. On the live Squarespace site, the chef
manages Blog and Recipes with native tools — no HTML, no developer.

### Journal (Blog) → **Squarespace Blog Collection**
- The "Journal" page maps 1:1 to a built-in **Blog Collection**.
- To publish: *Pages → Journal → + → write title, body, add a cover image →
  set a category/tag → Publish* (or schedule). Squarespace generates the
  listing layout, individual post pages, author, date, and RSS automatically.
- Each sample card on `blog.html` corresponds to one blog post. Styling is
  chosen once in the site's **Blog layout settings**; new posts inherit it.

### Recipes → **a second Blog Collection, used as "Recipes"**
Recommended native approach. Squarespace has no dedicated "recipe" content type,
and a Blog Collection is the closest no-code match (it gives a listing page +
one page per item + categories + images), so reuse it:

- Add a **second Blog Collection** named "Recipes" as its own page.
- Each recipe = one blog post. The chef adds one the same way she adds a journal
  entry: *Recipes → + → title (dish name), cover photo, then type the recipe in
  the post body.*
- For the structured header (Serves / Prep / Cook / Diet) and
  Ingredients / Method, she uses normal editor blocks inside the post body —
  a **Text block** with a short list for the facts, then **bulleted** and
  **numbered list** blocks for ingredients and steps. No custom fields needed.
- **Categories** (Starters / Mains / Dessert) give free filtering on the listing
  page. The `recipe.html` single-recipe page here shows the target layout those
  blocks should reproduce.

Both features are entirely editor-level: she clicks **+**, types, adds a photo,
and clicks **Publish**.
