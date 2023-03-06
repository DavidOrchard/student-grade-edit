# Student Grade Editor

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
It includes a [Prisma ORM](https://www.prisma.io/) and various other utils, most of which are not used in this particular project but are part of a nice boilerplate package.

## Getting Started

Install dependencies:

```bash
$ npm i --global jest
$ npm i --global pnpm
$ pnpm i
```

Start the dev server:

```bash
$ pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

To run the Jest tests

```bash
$ jest
```

To add the SQLite table, create the SQLite table:

```bash
$ pnpm run migrate
```

# Challenge

Assuming the list of students has been retrieved and a single student has been selected. Additionally, assuming that the subject list has been retrieved by a parent component and is passed via props. Implement the Subject list component, and any internal components required to display the list of subjects and implement edit and save functionality via the edit/save button.
  
Caveats:
You do not need to worry about styling
Assume all the endpoints exist and all the data is available
Assume any needed generic components exist (such as components defined by a style library, i.e. Material UI or Bootstrap)
Assume any needed callbacks are provided for you


