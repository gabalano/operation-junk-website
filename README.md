# Operation Junk Website

Static landing page for Operation Junk, a junk removal service focused on Schaumburg and the Chicago suburbs.

The site is built to get customers to call, text photos, or request a quote. It includes a bold hero, photo quote positioning, load size guide, services grid, quote placeholder, local advantage section, service area, FAQ, final CTA, and mobile sticky CTA.

## Run Locally

From this project folder:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/
```

## Deploy

This is a plain static website, so it can deploy to Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

### Vercel

1. Import this GitHub repository into Vercel.
2. Use framework preset `Other`.
3. Leave the build command blank.
4. Leave the output directory blank, or use `/`.
5. Deploy.

### Netlify

1. Connect this GitHub repository in Netlify.
2. Leave the build command blank.
3. Set publish directory to `/`.
4. Deploy.

### Cloudflare Pages

1. Connect this GitHub repository in Cloudflare Pages.
2. Use framework preset `None`.
3. Leave the build command blank.
4. Set output directory to `/`.
5. Deploy.

### GitHub Pages

1. Open the repository settings.
2. Go to Pages.
3. Deploy from the default branch.
4. Set the source folder to `/`.

## CTA

Main phone number: (872) 222-5502

Links used by the site:

- Call: `tel:+18722225502`
- Text: `sms:+18722225502`

## Brand Colors

- Dark green: `#006400`
- Yellow CTA: `#f8c542`

## Files

- `index.html` - site markup and content
- `styles.css` - responsive styling and brand system
- `assets/images/` - image assets
- `assets/logos/` - logo assets
