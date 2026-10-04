# Recommendations

Ideas that came up while redesigning the site but were **deliberately left out of
the three initial designs**. They're captured here so they can be considered later
without complicating the first pass.

## Platform decision: Shopify (changed from Squarespace)

Tracy didn't like Squarespace — specifically **slow customer service** (days to get
help) and that **setup wasn't easy**. She already runs her *Shefdress* site on
**Shopify** and finds it **much easier to use**. Her only hesitation is that Shopify
feels "e-commerce-first" rather than portfolio-first.

**Decision: build the chef site on Shopify.** The deciding factor is that she already
knows and likes the Shopify editor — that eliminates both of her actual complaints
(support + ease) with zero learning curve, and no one has to be her tech support.

- The "e-commerce only" worry is a misconception: Shopify has native **Pages** (Home,
  About, Contact) and a built-in **Blog**. A portfolio + blog maps cleanly with
  nothing for sale.
- **Recipes** = a second Blog (a "Recipes" blog) she posts to with the editor she
  already uses. Structured ingredient/method fields + Google recipe-rich-results
  schema are an optional later step (recipe app or theme metafields); plain posts work
  on day one.
- **Latent bonus, dormant until wanted:** a no-migration path to later sell the
  cookbook (*The Compassionate Kitchen*), gift cards, or take class/dinner deposits,
  and to cross-promote Shefdress.

**Rejected alternatives:**
- *Self-hosted Django / Wagtail / Ghost (on the existing Coolify box):* would
  reintroduce a brand-new admin for her to learn — the exact friction she's leaving —
  and make Ryan her permanent support + ops. Her complaints were *about* support and
  ease, so this points the wrong way. Only revisit if avoiding a subscription outweighs
  her comfort.
- *Static site generator:* no editor a non-technical chef can use to add posts/recipes.
- *Wix:* same category as Squarespace; lateral move, not an improvement.

**Open decisions:** (1) a separate Shopify store = a second subscription — confirm
that's acceptable; (2) recipes as structured fields + schema vs. simple blog posts to
start.

**Note on the mockups:** the three designs in `design-1/..3/` are *design direction*,
not drop-in code (Shopify themes are Liquid). Pick a theme close to the chosen look and
customize it — see the mapping below. The Coolify preview is still useful purely for
Tracy to choose between the three directions.

## Design → Shopify theme mapping

Closest **free** Shopify themes to each mockup direction (all are customizable; a paid
theme may get closer — verify current names in the Shopify Theme Store, they change):

- **Design 1 — Warm Desert Editorial** → **Craft** (artisan, serif, editorial warmth);
  *Publisher* as an alternative.
- **Design 2 — Clean Minimalist** → **Dawn** (Shopify's spacious minimalist default);
  *Studio* or *Sense* as alternatives.
- **Design 3 — Mid-Century Palm Springs Retro** → **Crave** (bold, food-oriented,
  playful type); *Colorblock* as an alternative for the geometric color-blocking look.

---

The ideas below were written when the plan was Squarespace; each has a direct Shopify
equivalent (Form Block → contact form / form app, Blog Collection → Blog, Email
Campaigns → Shopify Email, per-page SEO fields → Shopify's built-in SEO fields). All
remain achievable at an editor-only skill level unless noted.

## Priority: content & lead generation

- **Inquiry form instead of a plain email link.** Squarespace Form Block that routes
  to Tracy's inbox. Lets her ask the right questions up front (date, guest count,
  dietary needs, location in the valley) so the first reply can be useful. Reduces
  back-and-forth.
- **Services / offerings page.** A short page describing what she actually does —
  private dinners, in-home meal prep, events, cooking classes, menu development.
  Prospects currently have to guess.
- **Testimonials / reviews.** Social proof is the single biggest conversion lever for
  a private chef. A simple quote section, sourced from past clients.
- **Sample menus or "seasonal menu" gallery.** Visual proof of the food. Can reuse the
  Recipes collection styling.

## Priority: SEO & local discovery (Palm Springs)

- **Local SEO basics.** Page titles/meta that name the service area ("Vegan Private
  Chef in Palm Springs & the Coachella Valley"). Squarespace exposes SEO fields per
  page — no code needed.
- **Google Business Profile.** Free, and the primary way locals find a service like
  this. Link it from the site.
- **Service-area copy** naming nearby communities (Palm Desert, La Quinta, Rancho
  Mirage, Indian Wells) to catch local searches.

## Priority: engagement

- **Email newsletter / mailing list.** Squarespace Email Campaigns + a Newsletter
  Block. Pairs naturally with the new Blog and Recipes — "new recipe" or "seasonal
  menu" sends keep past clients warm.
- **Recipe → lead loop.** Each recipe page ends with a soft CTA ("Want this made for
  you? Inquire about a private dinner.") tying the Recipes feature back to bookings.

## Nice-to-have

- **Press / featured section.** The cookbook (*The Compassionate Kitchen*) and
  Shefdress are credibility anchors; give them a small home.
- **Recipe filtering** (by course, season, or dietary tag). Squarespace Blog
  categories/tags give basic filtering for free once Recipes is a Blog Collection.
- **Accessibility pass** on whichever design is chosen (contrast, alt text, focus
  states) before launch.
- **Analytics.** Squarespace built-in analytics or GA4 to see which recipes/posts
  drive inquiries.

## Explicitly out of scope (over-engineering for this client)

- Custom CMS, static-site generators, self-hosted frameworks, or any workflow that
  takes her off the Shopify editor she already knows. The whole point is that she can
  publish a blog post or recipe herself without help.
- Standing up / maintaining server infrastructure for the chef site. Shopify is hosted;
  don't trade that away for a self-managed box.
- Active online ordering / e-commerce at launch — not needed for a portfolio site. It
  stays a *dormant* Shopify capability, switched on only if she wants to sell something
  concrete (the cookbook, gift cards, a class).
- Reservation/booking software integrations — the inquiry form covers the actual need
  for now.
