# Orichalcum

web app template.

## Programming Language

- Typescript

## Framework and Library 

- React
- Next.js

## Styling

- tailwindcss

## Authentication 

- next-auth
- prisma.io

## Database

- prisma.io
- postgresql

## Data fetching and Queries

- swr

## Libs and tools

- estlint
- prettier

# Structure

## /components

Create react reusable components.

Example:

```dir
/components
    /button
        index.tsx
```

## /data

Static data, usually a json or yaml file

Example:

```dir
/data
    projects.json
    friends.yml
```

## /hooks

Crete react reusable hooks

Example:

```dir
/hooks
    useAuth.ts
    useQuery.ts
```

## /lib

Create reusable code extending libraries.

Example:

```dir
/lib
    prisma.ts
    logger.ts
```

## /pages

Next.js pages folder structure.

Example:

```dir
/pages
    /api
        user.ts
    /user
        index.tsx
```

## /prisma

prisma configuration folder. create models and relations for the application database inside `schema.prisma` and populate with dummy data by writing code inside `seed.ts`

## /public

Static assets.

Example:

```dir
/public
    /assets
        /media
            logo.svg
        /fonts
            Sarabun.ttf
```

## /styles

Css or css-in-js styles

Example:

```dir
/styles
    globals.css
    theme.ts
```

## /types

General purpose types to share between multiple files

Example:

```dir
/types
    example.ts
```

## /utils

Utils folder for reusable functions shared between the codebase

Example:

```dir
/utils
    hash.ts
    status.ts
```
