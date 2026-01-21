<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Aura - AI Design Studio App

This is a modern React + TypeScript application built with Vite for creating beautiful designs. The app is ready for deployment on Vercel.

View your app in AI Studio: https://ai.studio/apps/drive/1bKbt9OmE29H-RWKTcjlGiBIwgAEyzyr9

## Run Locally

**Prerequisites:** Node.js (v16 or higher)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env.local` file from the example:
   ```bash
   cp .env.local.example .env.local
   ```

3. Set your `GEMINI_API_KEY` in `.env.local` (Get your API key from https://aistudio.google.com/app/apikey)

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

Build the app for production:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Set environment variables in Vercel dashboard:
   - Go to your project settings
   - Add `GEMINI_API_KEY` environment variable

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect the Vite configuration
6. Add `GEMINI_API_KEY` in the environment variables section
7. Click "Deploy"

The app will be automatically built and deployed. Vercel will provide you with a URL to access your deployed application.

## Project Structure

- `/components` - React components (Header, Footer, PromptBuilder, TemplateCard)
- `/pages` - Page components (Home, Create, Components, Pricing)
- `/constants.tsx` - Application constants and mock data
- `/types.ts` - TypeScript type definitions
- `vercel.json` - Vercel deployment configuration
