## Questions:
  - How did you decide on the technical and architectural choices used as part of your solution?
    - I use the latest next 14 with tailwind css. Regarding the structure, I used app router and did not use src to make the structure look as simple as possible

  - Are there any improvements you could make to your submission?
    - Yes. I can improve slide button (next/prev). Ex: disabled button prev when start slide and disabled button next when last item of slide

  - What would you do differently if you were allocated more time?
    - Currently, I only spend about 3 hours doing this test. I don't have any ideas for other functions yet

  - What considerations are there if this was a production app?
    - If this is a production project, I need to consider performance, SEO, and user-friendliness to give users the best experience.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Structure
  - app
    - page.js
    - layout.js
    - comics
      - [slug]
        - page.js
  - assets
    - all images
  - components
    - comics
      - ...
    - home
      - ...
    - layout
      - ...
  - data
    - brands.json
    - comics.json


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Next version 14.0.3 + Tailwind Css

## React Slick for slide on homepage

You can install and see examples here: [Link](https://react-slick.neostack.com/docs/get-started)


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# huyle-test-nextjs
