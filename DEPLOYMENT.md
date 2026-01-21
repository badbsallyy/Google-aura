# Deployment Guide for Vercel

This guide will help you deploy the Aura app to Vercel.

## Prerequisites

- A Vercel account (sign up at https://vercel.com)
- A Gemini API key (get one from https://aistudio.google.com/app/apikey)

## Deployment Steps

### Method 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub** (if not already done)
   
2. **Login to Vercel**
   - Go to https://vercel.com
   - Click "Login" and sign in with your GitHub account

3. **Import your project**
   - Click "Add New..." → "Project"
   - Select your GitHub repository `badbsallyy/Google-aura`
   - Click "Import"

4. **Configure the project**
   - Vercel will automatically detect the Vite framework
   - The build settings are already configured in `vercel.json`:
     - Build Command: `npm run build`
     - Output Directory: `dist`
   
5. **Add environment variables**
   - In the "Environment Variables" section, add:
     - Name: `GEMINI_API_KEY`
     - Value: Your Gemini API key
   - Select all environments (Production, Preview, Development)

6. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Once done, Vercel will provide a URL like `https://your-project.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy the project**
   ```bash
   vercel
   ```
   - Follow the prompts to set up your project
   - Choose "yes" when asked if you want to deploy

4. **Add environment variables**
   ```bash
   vercel env add GEMINI_API_KEY
   ```
   - Paste your Gemini API key when prompted
   - Select which environments to add it to (Production, Preview, Development)

5. **Deploy to production**
   ```bash
   vercel --prod
   ```

## Post-Deployment

### Verify the deployment
1. Visit the URL provided by Vercel
2. Check that the app loads correctly
3. Test navigation between pages
4. Verify that all components render properly

### Automatic Deployments
- Every push to the main branch will trigger a production deployment
- Pull requests will get preview deployments automatically
- Preview deployments have their own unique URLs for testing

### Custom Domain (Optional)
1. Go to your project in Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Troubleshooting

### Build fails
- Check the build logs in Vercel dashboard
- Verify all dependencies are listed in package.json
- Ensure environment variables are set correctly

### App doesn't load
- Check browser console for errors
- Verify the `vercel.json` rewrite rules are working
- Make sure the build output is in the `dist` folder

### Environment variables not working
- Verify the variable name is exactly `GEMINI_API_KEY`
- Make sure you selected the correct environment (Production/Preview)
- Redeploy after adding environment variables

## Configuration Files

This project includes:
- `vercel.json` - Vercel deployment configuration
- `.env.local.example` - Example environment variables
- `.gitignore` - Excludes node_modules and sensitive files

## Support

For more information:
- Vercel Documentation: https://vercel.com/docs
- Vite Documentation: https://vitejs.dev
- Project Repository: https://github.com/badbsallyy/Google-aura
