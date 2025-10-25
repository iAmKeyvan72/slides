# 🚀 Deployment Guide

This guide will help you deploy your slides to `slides.keyvanmahmoudi.com` using Vercel.

## Prerequisites

- GitHub account
- Vercel account (sign up at [vercel.com](https://vercel.com))
- Domain `keyvanmahmoudi.com` configured in Vercel

## Step 1: Push to GitHub

Your slides are already in the repository: `https://github.com/iAmKeyvan72/slides.git`

Make sure all changes are committed and pushed:

```bash
git add .
git commit -m "Set up Next.js wrapper for Slidev presentations"
git push origin main
```

## Step 2: Import Project to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Project"
3. Select your GitHub repository: `iAmKeyvan72/slides`
4. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `out` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

5. Click "Deploy"

## Step 3: Configure Custom Domain

Once the initial deployment is complete:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Domains**
3. Click **Add Domain**
4. Enter: `slides.keyvanmahmoudi.com`
5. Follow Vercel's instructions to configure DNS:
   - Go to your domain provider (where `keyvanmahmoudi.com` is hosted)
   - Add a CNAME record:
     - **Type**: CNAME
     - **Name**: `slides`
     - **Value**: `cname.vercel-dns.com`
   - Or if Vercel provides a specific value, use that

6. Wait for DNS propagation (usually 5-10 minutes, can take up to 48 hours)

## Step 4: Verify Deployment

Once DNS is configured, visit:
- `https://slides.keyvanmahmoudi.com` - Should show your presentations list
- `https://slides.keyvanmahmoudi.com/manual-to-velocity-the-spec-driven-way` - Should show the presentation

## Automatic Deployments

Vercel will automatically deploy whenever you:
- Push to the `main` branch (production)
- Create a pull request (preview deployment)

## Adding New Presentations

1. Create a new Slidev presentation in `/presentations/my-new-talk`
2. Add presentation metadata to `/lib/presentations.ts`
3. Commit and push
4. Vercel automatically builds and deploys!

## Build Process

When you deploy, Vercel runs:
1. `npm install` - Installs Next.js dependencies
2. `npm run build` - Runs:
   - `npm run build:slides` - Builds all Slidev presentations to static HTML
   - `next build` - Builds Next.js app with static export
3. Deploys the `/out` directory

## Environment Variables

No environment variables needed for this setup! Everything is static.

## Troubleshooting

### Build Fails

Check the build logs in Vercel dashboard:
- Ensure all presentations have valid `package.json` with `build` script
- Ensure Slidev dependencies are installed in each presentation

### Domain Not Working

- Verify DNS settings with your domain provider
- Check Vercel's domain configuration page for status
- Use `dig slides.keyvanmahmoudi.com` to verify DNS propagation

### Presentation Not Showing

- Ensure presentation is listed in `/lib/presentations.ts`
- Verify the slug matches the directory name in `/presentations/`
- Check that build succeeded in Vercel logs

## Support

For issues:
- Check Vercel logs
- Review build output locally with `npm run build`
- Ensure Slidev presentations build individually: `cd presentations/[name] && npm run build`

---

**Happy presenting! 🎤**

