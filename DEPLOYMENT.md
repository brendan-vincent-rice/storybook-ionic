# Deployment Guide

This project contains both a **Storybook** and a **React App** that can be deployed to separate URLs on Vercel.

## Setup

1. Install Vercel CLI: `npm i -g vercel`
2. Login to Vercel: `vercel login`

## Deploy to Two Separate URLs

### Option A: Using Deploy Scripts (Recommended)

**Deploy Storybook:**
```bash
npm run deploy:storybook
```
- Uses `vercel-storybook.json` configuration  
- Builds with `npm run vercel-build`
- Output directory: `storybook-static`
- URL: `your-storybook-name.vercel.app`

**Deploy React App:**
```bash
npm run deploy:app
```
- Uses `vercel-app.json` configuration
- Builds with `npm run build` 
- Output directory: `dist`
- URL: `your-app-name.vercel.app`

### Option B: Manual Deployment

**For Storybook:**
1. Copy config: `cp vercel-storybook.json vercel.json`
2. Deploy: `vercel --prod`

**For React App:**
1. Copy config: `cp vercel-app.json vercel.json`  
2. Deploy: `vercel --prod`

## Project Structure

```
├── src/                    # React app source
│   ├── App.tsx            # Main React component
│   └── main.tsx           # React entry point
├── stories/               # Storybook stories
├── storybook-static/      # Storybook build output
├── dist/                  # React app build output
├── vercel-storybook.json  # Storybook Vercel config
├── vercel-app.json        # React app Vercel config
└── index.html             # React app HTML template
```

## Build Commands

- `npm run build` - Build React app → `dist/`
- `npm run vercel-build` - Build Storybook → `storybook-static/`
- `npm run dev` - Start React app dev server
- `npm run storybook` - Start Storybook dev server

## Notes

- Each deployment creates a separate Vercel project
- The deploy scripts automatically switch the `vercel.json` file
- Make sure to use different project names for each deployment