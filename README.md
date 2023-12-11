# CS 308 Term Project - Musicee

## Project Overview

This project aims to develop an online system for collecting liked-song information from various sources and providing users with analyses and recommendations based on their musical preferences. 
The system focuses on user interaction and personalized music choice analysis without involving music streaming.

### ALL Functionalities

### Data Format

- **Basic Data Format:**
  
  - Collects song information, including track name, performer(s), album/media details, and user ratings.
  - Handles challenges like multiple performers and different versions of the same song.

### Data Collection

- **User Input:**
  - Allows manual song input through a user-friendly web/mobile interface.
  - Supports batch input via file uploads (.json).
  - Permits data transfer from a self-hosted or cloud database.
  - Enables users to rate non-rated songs/albums/performers and modify ratings over time.

### Analysis of Musical Choices

- **Statistical Information:**
  - Provides users with statistical insights into their preferences, filterable by date constraints.
- **Tables and Charts:**
  - Displays tables showing how many likes the singers' songs received over time.

### Recommendations

- **Music Recommendations:**
  - Suggests songs based on user ratings.
  - Considers temporal properties and recommends less active but highly-rated items.
  - Recommends based on friendship activity.

### Additional Features

- **Authentication:**
  - Supports password-based authentication.
- **Friends and Friendship:**
  - Enables users to add friends.
- **Result Sharing:**
  - Permits sharing analysis results on social media platforms.
- **Data Exporting:**
  - Facilitates exporting song ratings with filtering options.



## Getting Started

## This is a [Next.js](https://nextjs.org/) project.

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
