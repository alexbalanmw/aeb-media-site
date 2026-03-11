# AEB Media Website

Your complete website, ready to deploy on Vercel.

---

## HOW TO GET THIS LIVE (Step by Step)

### Step 1: Create a GitHub account (if you don't have one)
- Go to **github.com** and sign up. It's free.

### Step 2: Upload this project to GitHub
- Once logged in, click the **"+"** button in the top right → **"New repository"**
- Name it: `aeb-media-site`
- Keep it **Public** or **Private** (doesn't matter)
- Click **"Create repository"**
- On the next page, click **"uploading an existing file"**
- Drag and drop ALL the files from the unzipped folder into the upload area
- **IMPORTANT:** Make sure the folder structure is correct:
  - `package.json` should be at the root (not inside another folder)
  - `src/` folder with `App.jsx` and `main.jsx` inside it
  - `public/` folder with `favicon.svg` inside it
  - `index.html` at the root
  - `vite.config.js` at the root
- Click **"Commit changes"**

### Step 3: Deploy on Vercel
- Go to **vercel.com** and click **"Sign Up"**
- Sign up with your **GitHub account** (this connects them)
- Click **"Add New Project"**
- You'll see your `aeb-media-site` repository — click **"Import"**
- Vercel will auto-detect it's a Vite project
- Click **"Deploy"**
- Wait about 60 seconds — done! Your site is live.

### Step 4: Connect your domain (aeb.media)
- In your Vercel project, go to **Settings → Domains**
- Type in `aeb.media` and click **Add**
- Vercel will show you DNS records to add
- Log into **Hostinger** → go to your domain's **DNS Zone settings**
- Add the records Vercel gave you (usually an A record and/or CNAME)
- Wait 15-60 minutes for it to take effect
- Your site is now live at aeb.media!

### Step 5: Cancel Hostinger hosting
- Once aeb.media loads your new site, cancel the hosting plan
- Keep the domain registration (that's separate and cheap)

---

## MAKING CHANGES LATER
Come back to Claude and say "I need to update my AEB Media site" — 
I'll edit the code and give you updated files to upload.

---

## COST BREAKDOWN
- **Vercel:** FREE (their free tier handles everything you need)
- **Domain (Hostinger):** ~$10-15/year (you already have this)
- **Total: $0-15/year** instead of $216/year on Hostinger
