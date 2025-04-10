# MissVoid.Store

A Next.js website for displaying photography galleries.

## Features

- Responsive image galleries
- Lightbox image viewing
- Modern UI with Tailwind CSS
- TypeScript for type safety
- Pinterest integration 

## Project Structure

- `app/` - Next.js App Router pages and components
- `app/components/` - Reusable components
- `app/galleries/` - Gallery pages
- `public/images/` - Directory for gallery images
- `public/MissVOIDimages/` - Directory for local gallery images (not tracked in Git)

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone git@github.com:b0ase/missvoid.git
   cd missvoid
   ```

2. Install dependencies
   ```
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   ```
   cp .env.example .env.local
   ```
   Then edit `.env.local` to add your Pinterest API credentials

4. Run the development server
   ```
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Managing Large Image Collections

The image collection in `public/MissVOIDimages/` is not tracked in Git due to its size. You have two options for handling these images:

### Option 1: Local Development with Images

1. Manually copy the images to your local `public/MissVOIDimages/` directory
2. These images will not be pushed to GitHub but will work locally

### Option 2: Use an External Storage Solution (Recommended)

For production, consider using:
- Vercel Blob Storage
- AWS S3
- Cloudinary
- Another image hosting service

Update the image paths in the code accordingly.

## Pinterest Integration

This project includes Pinterest integration. To set it up:

1. Create a Pinterest Developer account and app
2. Add the required credentials to your `.env.local` file:
   - `PINTEREST_APP_ID`
   - `PINTEREST_API_TOKEN`
   - `PINTEREST_CLIENT_SECRET`

## Adding Gallery Images

To add images to the galleries, place them in the corresponding folders:

```
public/images/gallery-1/
public/images/gallery-2/
...
public/images/gallery-6/
```

## Deployment

This project can be deployed on platforms like Vercel or Netlify. For production deployment:

```
npm run build
# or
yarn build
```

## License

All rights reserved.
