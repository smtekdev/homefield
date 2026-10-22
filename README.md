# Home Field Consulting — Screenshot-Matched HTML Project

A responsive, editable HTML/CSS/JavaScript landing page modeled on the **exact design reference supplied in ChatGPT**: cream-and-teal visual identity, copper call-to-action buttons, a photo-led hero, four service cards, clinician profile, values section, performance consultation feature, testimonial-card placeholders, FAQ accordion, sunset closing banner, and footer.

## Files

- `index.html` — real semantic page and editable copy
- `css/styles.css` — all styling and responsive breakpoints
- `js/main.js` — mobile navigation and copyright year
- `assets/` — all logo and image files saved locally (no broken third-party image links)
- `assets/design-reference.png` — the supplied screenshot, included for comparison

## How to view locally

Extract the ZIP, then **double-click `index.html`** in Chrome, Edge, Firefox or Safari. The website and all images work offline. Google Fonts require internet; local serif and sans-serif fallbacks are provided.

## How to create a public, shareable preview

1. Go to https://app.netlify.com/drop
2. Drag and drop the **extracted `HomeField-Screenshot-Matched-Website` folder** (the folder containing `index.html`).
3. Copy the `*.netlify.app` link Netlify provides. This is separate from the client's official website.

You can also upload the folder to any standard Apache/Nginx/cPanel static web host, or put it in a Laravel public folder with links adjusted.

## Important items before publishing as the real business site

1. **Replace the profile picture** (`assets/about-portrait.jpg`) with the clinician's approved real photo. The mockup portrait is illustrative, not verified to depict Dr. Yarlie Nicolas.
2. **Replace or remove the three sample testimonial cards.** They are visible placeholders, not real client reviews. Get appropriate permission and check applicable professional advertising/privacy rules before publishing testimonials.
3. Confirm any mentions of sports, leadership, and performance consultation accurately describe the practice's currently offered services.
4. Verify professional licensing statements and clinical services in each location served.
5. Replace any other AI-created concept photos if needed for licensing/brand accuracy. Images are cropped from the supplied design mockup and can appear soft on high-density screens; replace with original high-resolution approved photos when available.
6. Contact info was checked against https://homefieldconsulting.com/ when the project was authored: info@homefieldconsulting.com, (954) 800-6303. Booking buttons point to https://homefieldconsulting.clientsecure.me/. Verify these before launch.
7. Add a real privacy policy and other necessary legal/clinical notices before a public production launch; this is a design preview.

## Editing tips

Use any code editor such as VS Code. Change content in `index.html`, colors and layout in `css/styles.css`, and the photos in `assets/`. Keep the same filenames to replace existing photos without changing HTML. All HTML is standalone, without WordPress, npm, or a build step.
