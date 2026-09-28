# The Master Kids homepage

React + Vite conversion of the supplied HTML, using Tailwind CSS and Framer Motion.

## Run locally

```sh
npm install
npm run dev
```

Validate with `npm run build` and `npm run lint`. Use `npm run preview` to preview the production build.

## Editing

- `src/App.jsx`: page composition and cart/wishlist state.
- `src/components/HomeSections.jsx`: original hero, categories, promotions, reviews and store sections.
- `src/components/Header.jsx` and `Footer.jsx`: responsive navigation and footer.
- `src/components/ProductCard.jsx` and `Catalog.jsx`: reusable product cards, search and filters.
- `src/data/products.js`: the 12 supplied products, original image URLs and naira prices.
- `tailwind.config.js`: original colour, spacing and typography tokens.
- `src/App.css`: icon font, dialog and mobile refinements.

## Integration notes

Account pages are available at `/#/login`, `/#/signup` and `/#/forgot-password`. The header account link opens login on desktop and mobile. `src/components/AuthPage.jsx` contains the shared forms and illustration. Forms include validation, password visibility and signup password confirmation. Authentication and reset-email delivery need a backend; submitting displays an honest unavailable-service message and does not save credentials.

Cart and wishlist use local storage. Cart supports quantities, removal and WhatsApp order enquiries. Account help uses the store contact; Toy Club opens an email membership request. No authentication, payment processing or subscription backend is connected.

Images and Google Fonts are hosted externally. Store claims, reviews and prices are retained from the supplied HTML. Dedicated collection pages are outside this single-page conversion.

Animations respect reduced-motion preferences. Build, lint and React render checks passed; browser visual verification was unavailable in the development session.
