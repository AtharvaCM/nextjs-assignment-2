# NextJS Assignment 2

## Description

Build news web application using NextJS + REST. It should have page for Top headlines, Sources for top headlines, and search page.

## Pages

### Top Headlines (URL: `'/'`)

- We want to show list of top headline news for India.
- On cards, We should show news title and image and publish date.
- On click of any card it should open it on single news page & show all details from API response. ( ie `/news/:source/:newsTitle` or `/news/:title` )

### Top Headlines Sources (URL: `'/top-sources'`)

- We want to have list page for showing news sources with their details and link to their website.

### News Search (URL: `'/search'`)

- We should have page for searching news article.
- On search we will see list of news articles according to query.
- When we open news, it should open show all details from API response on new page.

### Single News Page (URL: `'/news/:source/:newsTitle'` or `'/news/:title'`)

- We will have separate page to show details about any single news article.
- This page will query news article using news source and news title.
- We will consume same API we are using for search.

## Goals

- Understand and use following NextJS features: SSR, Page Routing, Image Component, Link component.
- Understand NextJS data fetching methods and how they work (eg. `getStaticProps`, `getStaticPaths`)

## Notes

- Pages should be Server Side Rendered.
- Use NextJS provided components ( i.e. Link, Image ).
- Each page should have link to other pages.

## API's

- **Top Headlines** : This will give you list of makes ( Car Manufacturers )
Endpoint : [getAllMakes](https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json)
- **Models for Make** :
This will give you list of models for particular make. We need to pass make name we got from makes API instead of `make-name`  
Endpoint : [getModelsForMake](https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/bmw?format=json)

### Reference Material

- Hooks : [YT Video](https://www.youtube.com/watch?v=TNhaISOUy6Q)
- Git Commits : [Medium Article](https://medium.com/@nawarpianist/git-commit-best-practices-dab8d722de99)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
