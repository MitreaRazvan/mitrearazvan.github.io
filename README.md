# Mitrea Andrei Razvan - Portfolio Website

A minimalist UI/UX designer portfolio built with Next.js, shadcn/ui, and Tailwind CSS.

## 🎨 Design Features

- **Minimalist Design** - Clean, professional aesthetic with generous white space
- **Peach Accent Color** - Sophisticated soft peach (#FFD4A3) accent throughout
- **Smooth Animations** - Fade-in effects on scroll for a polished experience
- **Fully Responsive** - Mobile-first design that works on all devices
- **Fast & Lightweight** - Optimized for performance

## 🚀 Quick Start (MacBook)

### Prerequisites

You need to have Node.js installed. To check if you have it:

```bash
node --version
```

If you don't have Node.js, install it from [nodejs.org](https://nodejs.org/) (download the LTS version).

### Step 1: Open Terminal

1. Press `Cmd + Space` to open Spotlight
2. Type "Terminal" and press Enter

### Step 2: Navigate to Your Project

```bash
# Go to your Downloads folder (or wherever you saved the project)
cd ~/Downloads/portfolio-project

# Or if you extracted it to Desktop:
cd ~/Desktop/portfolio-project
```

### Step 3: Install Dependencies

```bash
npm install
```

This will take 2-3 minutes. You'll see a lot of text scrolling - this is normal!

### Step 4: Run the Development Server

```bash
npm run dev
```

You should see:

```
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

### Step 5: View Your Portfolio

Open your web browser and go to:

```
http://localhost:3000
```

You should see your portfolio! 🎉

### Step 6: Make Changes (Optional)

To update your content, edit the file:

```
lib/data.ts
```

You can use any text editor like TextEdit, VS Code, or Sublime Text.

After making changes, save the file and refresh your browser - changes appear automatically!

## 📝 Customizing Your Content

Edit `lib/data.ts` to update:

- Your name, title, and tagline
- Email and social media links
- Work experience
- Education
- Languages
- Background story

## 🌐 Deploying to Vercel (FREE)

### Step 1: Create a GitHub Account

1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Follow the steps to create your free account

### Step 2: Install GitHub Desktop (Easy Way)

1. Go to [desktop.github.com](https://desktop.github.com)
2. Download and install GitHub Desktop for Mac
3. Open GitHub Desktop and sign in with your GitHub account

### Step 3: Create a Repository

1. In GitHub Desktop, click **File > Add Local Repository**
2. Click **"Create a Repository"**
3. Fill in:
   - **Name**: `portfolio`
   - **Local Path**: Browse to your `portfolio-project` folder
   - Check "Initialize this repository with a README"
4. Click **"Create Repository"**

### Step 4: Publish to GitHub

1. Click the **"Publish repository"** button in GitHub Desktop
2. Uncheck "Keep this code private" (for free deployment)
3. Click **"Publish Repository"**

### Step 5: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Click **"Import Project"**
5. Find your `portfolio` repository
6. Click **"Import"**
7. Click **"Deploy"** (use all default settings)

### Step 6: Wait for Deployment

Vercel will build and deploy your site. This takes about 2-3 minutes.

Once done, you'll get a URL like: `https://portfolio-username.vercel.app`

### Step 7: Custom Domain (Optional)

If you want a custom domain:

1. In Vercel dashboard, go to your project
2. Click **Settings > Domains**
3. Add your domain and follow the instructions

## 🔄 Making Updates After Deployment

1. Make changes to your files (like `lib/data.ts`)
2. In GitHub Desktop:
   - You'll see the changed files in the left sidebar
   - Write a commit message (e.g., "Updated work experience")
   - Click **"Commit to main"**
   - Click **"Push origin"**
3. Vercel will automatically detect the changes and redeploy your site in ~2 minutes!

## 📁 Project Structure

```
portfolio-project/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Sticky nav bar
│   ├── Hero.tsx         # Hero section
│   ├── TheWayIWork.tsx  # Way I work section
│   ├── WorkExperience.tsx # Experience cards
│   ├── Background.tsx   # Background section
│   ├── Education.tsx    # Education section
│   └── Contact.tsx      # Contact/footer
├── lib/
│   ├── data.ts          # 📝 EDIT THIS FILE for content
│   └── utils.ts         # Utility functions
└── components/ui/       # Reusable UI components
```

## 🎨 Color Palette

- **Peach 300**: `#FFD4A3` (Main accent)
- **Peach 100**: `#FFF3EB` (Light backgrounds)
- **Peach 400**: `#FFC380` (Hover states)
- **Black**: Text
- **White**: Backgrounds
- **Gray 50-900**: Neutral tones

## 🛠️ Built With

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Framer Motion** - Animations (via CSS)

## 🆘 Troubleshooting

### "npm: command not found"

You need to install Node.js. Go to [nodejs.org](https://nodejs.org/) and download the LTS version.

### Port 3000 already in use

Someone else is using that port. Use a different one:

```bash
npm run dev -- -p 3001
```

Then visit `http://localhost:3001`

### Changes not showing up

1. Hard refresh your browser: `Cmd + Shift + R`
2. Or stop the server (`Ctrl + C` in Terminal) and run `npm run dev` again

### Build errors on Vercel

Make sure you pushed all your changes to GitHub:

1. Open GitHub Desktop
2. Check if there are uncommitted changes
3. Commit and push them

## 📧 Support

If you get stuck, you can:

1. Check the error message in Terminal
2. Google the error message
3. Ask in design communities like Designer Hangout or ADPList

## 📄 License

This is your personal portfolio - use it however you want!

---

Built with ❤️ by Mitrea Andrei Razvan
